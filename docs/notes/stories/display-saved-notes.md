# Story — Display saved notes

Module: `notes`
Plan item: Display saved notes

## User story

As a Visitor, I want to view saved notes in one read-only list, so that I can read existing note content without needing account access or mutation tools.

## In scope

- Show one public "Note Board" page.
- Fetch saved notes from configured backend/API data source.
- Show loading state while saved notes request is pending.
- Show populated state when one or more saved notes load successfully.
- Show empty state when saved notes load successfully and response contains zero notes.
- Show error state when saved notes cannot load.
- Display each saved note as separate read-only list item.
- Display required note content for every returned note.
- Display optional created/updated time only when present and supported by service contract.
- Keep page responsive from 320px and up with no horizontal page scroll.
- Keep output escaped through normal React rendering.

## Out of scope

- Adding notes.
- Editing notes.
- Deleting notes.
- Searching, filtering, sorting controls, or pagination controls.
- Authentication, sign-in, sign-out, accounts, or permissions UI.
- Note detail pages or routing beyond one screen.
- Data seeding, import, admin maintenance, or operator tooling.
- Preview-only Loading/Populated/Empty/Error state controls from design documentation.
- Real-time updates while visitor remains on page.
- Custom sanitisation rules beyond normal output escaping unless Khoa adds them in technical design.

## UI scope

- Screen touched: single Notes screen from approved design.
- Components used: App Shell, Topbar Navigation if anchors remain useful, Brand Mark, Hero Copy, Notes Panel, Status Chip, Note List and Note Card, Loading State Card, Empty State Card, Error State Card and Retry Button, Detail Card.
- States required in notes area: loading, populated, empty, error.
- Production build must omit preview-only state switch controls.
- Loading, populated, and empty regions use `aria-live="polite"`; error region uses `aria-live="assertive"`.
- Notes list uses semantic `ul` with `aria-label="Saved notes list"`; each note uses `li` and has no hidden action controls.
- Retry button appears only in error state and retries loading saved notes.
- Visual implementation follows `design/design-system.md` tokens and approved calm blue style.

## Acceptance criteria

1. Given saved notes request is pending, when Visitor opens "Note Board", then notes area displays loading state before showing loaded result.
2. Given saved notes request is pending, when Visitor views visible controls, then no add, edit, delete, search, or sign-in control is visible.
3. Given saved notes response contains one note, when load succeeds, then notes area displays exactly one read-only note item with that note content.
4. Given saved notes response contains multiple notes, when load succeeds, then notes area displays every returned note as separate read-only list item.
5. Given saved notes response contains multiple notes, when Visitor views visible controls, then no add, edit, delete, search, or sign-in control is visible.
6. Given saved notes response contains zero notes, when load succeeds, then notes area displays empty state instead of blank content.
7. Given saved notes response contains zero notes, when Visitor views empty state, then no add-note call to action or creation control is visible.
8. Given saved notes request fails, when Visitor opens "Note Board", then notes area displays error state.
9. Given saved notes request fails, when Visitor compares page state, then error state is visually and textually distinct from empty state.
10. Given error state is visible, when Visitor activates `Retry loading`, then page attempts to load saved notes again and shows loading state during retry.
11. Given saved note has required content and optional metadata missing, when load succeeds, then note remains visible with its content.
12. Given many notes are returned, when Visitor views page at 320px viewport width, then all notes remain readable without horizontal page scroll.
13. Given Visitor uses keyboard navigation, when focusing any interactive browser control present on page, then visible focus indicator is shown.
14. Given page renders saved note content, when content includes markup-like text, then it is displayed as text rather than executed as HTML.

## Dependencies

- Approved design and `design/design-system.md`.
- `docs/architecture/overview.md` conventions.
- Backend service design must define notes read endpoint path, JSON shape, ordering, and error responses before backend story work.
- PostgreSQL schema for saved notes must exist before backend story work.
- Saved notes data may be empty; empty state is valid and not blocker.
- No external credentials or provider setup needed.
