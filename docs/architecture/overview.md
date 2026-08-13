# Architecture Overview — Note Board

## Scope

"Note Board" is one fullstack function: display saved notes already stored in PostgreSQL. Product has one public read-only page with loading, populated, empty, and error states. Add, edit, delete, search, authentication, and note detail pages are out of scope.

## Tech stack

- Frontend: Next.js 15 App Router, TypeScript, Tailwind CSS v3, ESLint.
- Backend: Go 1.22 module under `code/backend`, HTTP API under `cmd/api`.
- Database: PostgreSQL 16 in local compose; deployment injects `DATABASE_URL`.
- Runtime: `docker compose --profile local up` boots PostgreSQL, backend, and frontend locally. Deployment compose uses shared database through `DATABASE_URL`.
- CI: `.github/workflows/ci.yml` runs backend build/vet/test, frontend lint/build/typecheck, and compose config validation.

## Repository layout

```text
code/
  backend/
    cmd/api/main.go              # API process and boot-time migrations
    migrations/                  # embedded SQL migrations and schema_migrations tracking
    .env.example                 # backend env contract
    Dockerfile                   # fixed Go container build
  frontend/
    app/layout.tsx               # App Router root layout
    app/page.tsx                 # thin Server Component composition root
    app/globals.css              # shared design tokens and reusable classes
    .env.example                 # public frontend env contract
    Dockerfile                   # fixed Next standalone container build
docs/
  architecture/overview.md       # this document
  notes/SRS.md                   # source requirements
```

`docker-compose.yml`, service Dockerfiles, and existing container/publish workflows are treated as committed platform contracts. Scaffold follows their expected paths instead of editing them.

## Component boundaries and data flow

1. Browser loads the Next.js page from `code/frontend`.
2. Story UI will mount a single notes component into `app/page.tsx`.
3. Client-side note loading code will call `NEXT_PUBLIC_API_URL`.
4. Go backend receives read-only HTTP requests, validates request shape, queries PostgreSQL with parameterized SQL, and returns JSON.
5. PostgreSQL stores public notes. Schema details and API response contracts are finalized in ERD/service design tasks, not here.

The backend currently exposes only `/healthz` so scaffold can start safely. Feature work adds the notes read endpoint after service design.

## Boot and migration contract

Backend startup order is fixed:

1. Read `DATABASE_URL` from environment.
2. Connect to PostgreSQL.
3. Apply pending `.up.sql` files from `code/backend/migrations` in filename order.
4. Record applied versions in `schema_migrations`.
5. Verify database with `SELECT 1`.
6. Listen on `$PORT`, then `$APP_PORT`, then `8080`.

`/healthz` returns 200 only after migrations have succeeded and current `SELECT 1` works. Failed database health returns 503.

## Frontend conventions

- `app/page.tsx` stays a Server Component and composition root only.
- Story components use `export default function ComponentName()`.
- Files using browser APIs, event handlers, `useState`, `useEffect`, or `useRef` must start with literal first line `"use client"`.
- Shared design tokens and reusable classes live in `app/globals.css`; story authors should avoid editing it.
- Production UI must not include preview-only Loading/Populated/Empty/Error controls from design documentation.

## Backend conventions

- Exactly one `main` package: `code/backend/cmd/api`.
- Use Go standard library first; keep dependencies minimal.
- Database access uses `database/sql` with `pgx` stdlib driver.
- All SQL using external values must be parameterized.
- HTTP handlers return generic external errors and log useful internal details.
- Use context timeouts for database and external I/O.

## Naming conventions

- Go packages: short lowercase names.
- SQL migrations: `YYYYMMDDNNNN_description.up.sql` and matching `.down.sql`.
- Database tables/columns: `snake_case`.
- React components: PascalCase default-exported functions.
- CSS custom properties: semantic names by job, e.g. `--color-primary`, not hue names.
- Environment variables: `UPPER_SNAKE_CASE`.

## Environment variables

### Root `.env.example`

- `POSTGRES_USER` — local compose database user.
- `POSTGRES_PASSWORD` — local compose database password.
- `POSTGRES_DB` — local compose database name.
- `DATABASE_URL` — backend database URL in deployment/runtime.
- `PORT` — backend listen port.
- `NEXT_PUBLIC_API_URL` — browser-facing API base URL for frontend.
- `BACKEND_PORT` — optional local host port for backend.
- `FRONTEND_PORT` — optional local host port for frontend.

### Backend `code/backend/.env.example`

- `DATABASE_URL` — required PostgreSQL connection string.
- `PORT` — primary HTTP listen port.
- `APP_PORT` — fallback HTTP listen port.

### Frontend `code/frontend/.env.example`

- `NEXT_PUBLIC_API_URL` — browser-facing API base URL.

No secrets are committed. Real deployment values are injected by runtime.

## Run locally

```bash
cp .env.example .env
docker compose --profile local up --build
```

Open frontend at `http://localhost:3000`. Backend health is `http://localhost:8080/healthz`.

Local backend without compose:

```bash
cd code/backend
DATABASE_URL='postgres://app:app_secret@localhost:5432/app?sslmode=disable' PORT=8080 go run ./cmd/api
```

Local frontend without compose:

```bash
cd code/frontend
npm ci
NEXT_PUBLIC_API_URL=http://localhost:8080 npm run dev
```

## CI checks

Backend:

```bash
cd code/backend
go build ./...
go vet ./...
go test ./...
```

Frontend:

```bash
cd code/frontend
npm ci
npm run lint
npm run build
npm test --if-present
```

Compose:

```bash
docker compose config -q
```

## Decisions and tradeoffs

1. Fullstack shape retained.
   - Decision: Keep frontend, backend, and PostgreSQL because SRS requires displaying notes already stored in database.
   - Rejected: Static-only mock list. Tradeoff: lower infrastructure, but violates database-backed requirement and cannot show real saved notes.
   - Rejected: Frontend reads database directly. Tradeoff: fewer services, but exposes database credentials and breaks browser security model.

2. Boot-time migrations in backend.
   - Decision: Backend applies embedded migrations before listening.
   - Rejected: Manual migration step. Tradeoff: simpler application code, but runtime starts with empty database and no other migrator exists.
   - Rejected: Compose migration sidecar. Tradeoff: clear separation, but adds another service and coordination for one small schema.

3. `database/sql` plus `pgx` stdlib driver.
   - Decision: Use standard library DB API with one Postgres driver.
   - Rejected: ORM. Tradeoff: faster CRUD scaffolding, but adds abstraction and dependency weight for read-only list.
   - Rejected: Raw `pgxpool` everywhere. Tradeoff: more driver-specific features, but less standard surface for this simple API.

4. Next.js App Router shell only.
   - Decision: `app/page.tsx` composes future story component and ships no product feature markup.
   - Rejected: Implement list UI in scaffold. Tradeoff: visible demo sooner, but scaffold task would steal feature scope and create rewrite risk.
   - Rejected: Pages Router. Tradeoff: older pattern familiarity, but conflicts with requested Next.js 15 App Router convention.

5. Tailwind plus CSS variables.
   - Decision: Store approved design tokens in `globals.css`, keep Tailwind for utility composition.
   - Rejected: Tailwind theme only. Tradeoff: centralized config, but misses many design-system custom properties used by CSS states.
   - Rejected: CSS modules per future component. Tradeoff: local isolation, but encourages duplicated shared tokens.

6. Existing compose and Dockerfiles unchanged.
   - Decision: Follow committed platform files and scaffold inside expected directories.
   - Rejected: Rewrite compose/Dockerfiles. Tradeoff: could match personal preferences, but risks breaking orchestrator assumptions and container CI.

## Risks and unknowns

- Maximum note count and ordering are not final in architecture; service design must set read endpoint behavior before backend feature work.
- Notes are assumed public. Any private notes requirement becomes new authentication scope.
- Seed/import process for notes is outside product scope; empty database must produce empty state.
- Down migrations exist for local rollback only; production rollback plan depends on deployment process.
