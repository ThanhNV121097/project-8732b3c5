# Design System — Note Board

> Source of truth: the approved `index.html`.
> Every value below is extracted from it. Changing a value here without changing the approved design is a defect.

Last updated: 2026-08-13

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#F8FAFC` | Page background, board background, empty status background |
| `--color-bg-soft` | `#EEF4FF` | Page background gradient end |
| `--color-surface` | `#FFFFFF` | Card, panel, mobile menu, note, button surface |
| `--color-surface-raised` | `rgba(255,255,255,.86)` | Main notes panel |
| `--color-surface-glass` | `rgba(255,255,255,.74)` | Sticky topbar |
| `--color-surface-muted` | `rgba(255,255,255,.75)` | Scope pills and detail cards |
| `--color-border` | `#E2E8F0` | Default border and divider |
| `--color-border-strong` | `#CBD5E1` | Dashed state-card border and empty status border |
| `--color-border-selected` | `#BFDBFE` | Hover border |
| `--color-border-info` | `#DBEAFE` | Eyebrow and tag border |
| `--color-border-success` | `#A7F3D0` | Loaded status border |
| `--color-border-danger` | `#FECACA` | Error card and error status border |
| `--color-text` | `#0F172A` | Body text, brand text |
| `--color-text-muted` | `#64748B` | Secondary text, captions |
| `--color-text-subtle` | `#475569` | Note body, inactive control, empty status text |
| `--color-text-pill` | `#334155` | Scope pill text |
| `--color-primary` | `#2563EB` | Primary accent, active preview control, focus hue |
| `--color-primary-strong` | `#1D4ED8` | Tag text, gradient start variable, dark blue state |
| `--color-primary-soft` | `#EFF6FF` | Navigation hover, tags, eyebrow, icon backgrounds, menu button |
| `--color-primary-light` | `#60A5FA` | Mark gradient end |
| `--color-primary-text` | `#FFFFFF` | Text on primary, icon stroke on mark |
| `--color-success` | `#10B981` | Loaded dot, status dot |
| `--color-success-text` | `#047857` | Loaded status text |
| `--color-success-soft` | `#ECFDF5` | Loaded status background |
| `--color-danger` | `#DC2626` | Error icon and retry button background |
| `--color-danger-strong` | `#B91C1C` | Retry hover and error status text |
| `--color-danger-soft` | `#FEF2F2` | Error card and error status background |
| `--color-danger-icon-bg` | `#FEE2E2` | Error icon background |
| `--color-focus` | `rgba(37,99,235,.38)` | Keyboard focus ring |
| `--color-shadow` | `rgba(15,23,42,.10)` | Main panel and menu shadow |
| `--color-shadow-soft` | `rgba(15,23,42,.07)` | Topbar shadow |
| `--color-shadow-note` | `rgba(15,23,42,.08)` | Note hover shadow |
| `--color-shadow-primary` | `rgba(37,99,235,.25)` | Brand mark shadow |
| `--color-shadow-primary-soft` | `rgba(37,99,235,.20)` | Active state button shadow |
| `--color-shadow-danger` | `rgba(220,38,38,.18)` | Retry button shadow |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` | `--color-bg` | `16.8:1` | AA |
| `--color-text` | `--color-surface` | `17.8:1` | AA |
| `--color-text-muted` | `--color-bg` | `4.7:1` | AA |
| `--color-text-muted` | `--color-surface` | `4.5:1` | AA |
| `--color-text-subtle` | `--color-surface` | `7.6:1` | AA |
| `--color-text-pill` | `--color-surface-muted` | `10.0:1` | AA |
| `--color-primary` | `--color-primary-soft` | `4.6:1` | AA |
| `--color-primary-strong` | `--color-primary-soft` | `5.8:1` | AA |
| `--color-primary-text` | `--color-primary` | `5.2:1` | AA |
| `--color-primary-text` | `--color-danger` | `4.8:1` | AA |
| `--color-success-text` | `--color-success-soft` | `4.8:1` | AA |
| `--color-danger-strong` | `--color-danger-soft` | `5.8:1` | AA |
| `--color-danger` | `--color-danger-icon-bg` | `4.0:1` | AA Large / UI |
| `--color-border` | `--color-surface` | `1.2:1` | FAIL for UI border; decorative border only |
| `--color-border-strong` | `--color-bg` | `1.4:1` | FAIL for UI border; decorative border only |

### 1.2 Spacing

Base unit: `1px`, with most layout values on 2px and 4px steps. Every margin, padding, and gap in the product uses one of these values.

| Token | Value |
|---|---|
| `--space-0` | `0` |
| `--space-4` | `4px` |
| `--space-5` | `5px` |
| `--space-6` | `6px` |
| `--space-8` | `8px` |
| `--space-9` | `9px` |
| `--space-10` | `10px` |
| `--space-11` | `11px` |
| `--space-12` | `12px` |
| `--space-13` | `13px` |
| `--space-14` | `14px` |
| `--space-16` | `16px` |
| `--space-18` | `18px` |
| `--space-20` | `20px` |
| `--space-21` | `21px` |
| `--space-22` | `22px` |
| `--space-24` | `24px` |
| `--space-26` | `26px` |
| `--space-28` | `28px` |
| `--space-30` | `30px` |
| `--space-32` | `32px` |
| `--space-34` | `34px` |
| `--space-36` | `36px` |
| `--space-38` | `38px` |
| `--space-48` | `48px` |
| `--space-52` | `52px` |
| `--space-64` | `64px` |
|
### 1.3 Typography

Font families (include the fallback stack and how the font is loaded):

- Body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`; loaded by local/system fallback only, no external font request.
- Headings: inherit body stack.
- Mono: no mono token appears in approved design.

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-xs` | `12px` | normal | `720` | Tags |
| `--text-sm-tight` | `13px` | normal | `760` / normal | Eyebrow, status chip, date, footer, state buttons |
| `--text-sm` | `14px` | `1.5` or normal | `650` / normal | Navigation, pills, panel subtext, detail body |
| `--text-base` | browser default `16px` | `1.55` | normal | Note body and state copy |
| `--text-note-title` | `17px` | normal | bold default | Note title |
| `--text-lg` | `18px` | normal | bold default | Panel title |
| `--text-xl` | `20px` | `1.65` | normal | Lead paragraph |
| `--text-2xl` | `22px` | normal | bold default | Loading, empty, error state headings |
| `--text-hero` | `clamp(42px,7vw,76px)` | `.94` | bold default | h1 |

Heading levels are used in order and never skipped for visual sizing: `h1` hero title, `h2` panel title, `h3` note and state headings.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-dot` | `50%` | Status dots and loader |
| `--radius-mark` | `13px` | Brand mark |
| `--radius-card` | `18px` | Note cards, state cards, mobile menu, detail cards |
| `--radius-panel` | `22px` | Main panel, state icon |
| `--radius-topbar-mobile` | `24px` | Topbar at small viewport |
| `--radius-full` | `999px` | Pills, nav links, status chip, state buttons, retry button, skeleton lines |
| `--border-width` | `1px` | Default border |
| `--border-width-focus` | `3px` | Keyboard focus ring |
| `--border-width-loader` | `4px` | Loading spinner |
| `--shadow-sm` | `0 10px 22px rgba(37,99,235,.25)` | Brand mark |
| `--shadow-md` | `0 12px 36px rgba(15,23,42,.07)` | Sticky topbar |
| `--shadow-lg` | `0 22px 60px rgba(15,23,42,.10)` | Main panel and mobile menu |
| `--shadow-note-hover` | `0 14px 30px rgba(15,23,42,.08)` | Note hover |
| `--shadow-primary-active` | `0 10px 20px rgba(37,99,235,.2)` | Pressed state preview button |
| `--shadow-danger-action` | `0 12px 24px rgba(220,38,38,.18)` | Retry button |
| `--duration-fast` | `.18s` | Hover, mobile menu open, button state |
| `--duration-state` | `.24s` | State panel entry |
| `--duration-hero` | `.5s` | Hero copy entry |
| `--duration-panel` | `.62s` | Panel entry |
| `--duration-loader` | `.85s` | Spinner rotation |
| `--duration-shimmer` | `1.3s` | Skeleton shimmer |
| `--duration-demo-load` | `.6s` | Initial preview state switch |
| `--duration-demo-retry` | `.9s` | Retry preview delay |
| `--easing` | `ease` | Hover, focus, state transitions, entry motion |
| `--easing-linear` | `linear` | Spinner and shimmer |

Motion does not include a `prefers-reduced-motion: reduce` override in approved design.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `base` | `0` | `min(1120px, calc(100% - 32px))` | 1 | `16px` shell side gutter |
| `md` | `861px` | `min(1120px, calc(100% - 32px))` | Hero: `1.02fr .98fr`; details: `repeat(3,1fr)` | `34px` hero, `14px` details |
| `mobile` | up to `860px` | `min(1120px, calc(100% - 32px))` | Hero: `1fr`; details: `1fr` | `16px` shell side gutter |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | `0` |
| Sticky header | `5` |
| Dropdown | not used |
| Modal backdrop | not used |
| Modal | not used |
| Toast | not used |

## 2. Components

### 2.1 App Shell

**Purpose** — Frame the one-page read-only notes experience. Do not use it for multi-page app navigation without revisiting layout.

**Anatomy** — `[sticky topbar] [mobile menu?] [main hero + notes panel] [boundary detail cards] [footer]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Desktop | `--space-28`, `--space-64`, `--space-52` | Viewports wider than `860px` |
| Mobile | `--space-16`, `--radius-topbar-mobile` | Viewports at or below `860px` |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | full viewport minimum | `28px 0 64px` | inherited body |
| Mobile | full viewport minimum | `16px 0 64px` | inherited body |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Soft radial plus vertical background gradient | `--color-bg`, `--color-bg-soft`, `--color-primary` |
| Hover | No shell hover state | none |
| Focus (keyboard) | Focus handled by child links/buttons | `--color-focus` |
| Active / pressed | No shell active state | none |
| Disabled | Shell is never disabled | none |
| Loading | Notes panel swaps to loading state; shell stays stable | `--duration-state` |
| Error | Notes panel swaps to error state; shell stays stable | `--color-danger-soft` |
| Empty | Notes panel swaps to empty state; shell stays stable | `--color-bg` |

**Accessibility** — Use semantic `header`, `nav`, `main`, `section`, `footer`. Keep one `h1`. Maintain visible focus for all interactive descendants. Minimum hit target comes from `10px 14px` nav padding and pill shape.

### 2.2 Topbar Navigation

**Purpose** — Provide local anchors for Notes and States in preview. In production, omit state preview controls and keep navigation only if anchors remain useful.

**Anatomy** — `[brand link with mark] [desktop nav links] [mobile menu button] [mobile menu]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Desktop nav | `--color-surface-glass`, `--radius-full`, `--shadow-md` | Viewports wider than `860px` |
| Mobile nav | `--color-surface`, `--radius-card`, `--shadow-lg` | Viewports at or below `860px` |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Topbar | content-led | `12px 14px` | `--text-sm` |
| Nav link | content-led | `10px 14px` | `--text-sm` |
| Menu button | content-led | `10px 13px` | `--text-sm` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Sticky glass pill with muted nav links | `--color-surface-glass`, `--color-text-muted`, `--shadow-md` |
| Hover | Nav link gets soft blue background, primary text, `translateY(-1px)` | `--color-primary-soft`, `--color-primary`, `--duration-fast` |
| Focus (keyboard) | 3px blue translucent outline, 4px offset | `--color-focus`, `--border-width-focus` |
| Active / pressed | Mobile menu button toggles `aria-expanded`; state otherwise unchanged | `--color-primary-soft`, `--color-primary` |
| Disabled | Not present in approved design | none |
| Loading | No loading nav state | none |
| Error | No error nav state | none |
| Empty | No empty nav state | none |

**Accessibility** — Brand link has `aria-label="Note Board home"`. Primary and mobile navs have labels. Menu button uses `aria-expanded` and `aria-controls`. Escape closes mobile menu. Links are keyboard-focusable. Hit target is at least 44px high for menu button and close to 44px for nav links.

### 2.3 Brand Mark

**Purpose** — Identify Note Board with a document icon. Do not replace with emoji.

**Anatomy** — `[rounded square gradient mark] [inline SVG document icon] [wordmark]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-primary`, `--color-primary-light`, `--color-primary-text` | Topbar brand only |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | `36px` mark, `21px` icon | none | brand text uses inherited `14px`, weight `800` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Blue gradient square, white document icon | `--color-primary`, `--color-primary-light`, `--color-primary-text` |
| Hover | No separate brand hover in approved design | none |
| Focus (keyboard) | Brand link gets focus ring | `--color-focus` |
| Active / pressed | No separate active state | none |
| Disabled | Not present | none |
| Loading | Not present | none |
| Error | Not present | none |
| Empty | Not present | none |

**Accessibility** — Mark SVG is `aria-hidden="true"`; accessible name comes from brand link label.

### 2.4 Hero Copy

**Purpose** — Explain scope and read-only behavior before the list. Do not add primary action buttons; creation is out of scope.

**Anatomy** — `[eyebrow] [h1] [lead paragraph] [scope pills]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--text-hero`, `--text-xl`, `--color-text`, `--color-text-muted` | Single Note Board page |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Eyebrow | content-led | `8px 12px` | `--text-sm-tight` |
| Pill | content-led | `9px 12px` | `--text-sm` |
| Lead | content-led | none | `--text-xl` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Copy enters with `fadeSlide .5s ease` | `--duration-hero`, `--easing` |
| Hover | No hover state | none |
| Focus (keyboard) | No focusable hero element except child links if added later | none |
| Active / pressed | Not interactive | none |
| Disabled | Not interactive | none |
| Loading | Scope copy remains visible while panel loads | none |
| Error | Scope copy remains visible while panel errors | none |
| Empty | Scope copy remains visible while panel empty | none |

**Accessibility** — Hero section uses `aria-labelledby` tied to `h1`. Scope facts use `aria-label="Scope facts"`. Decorative green dot is `aria-hidden="true"`.

### 2.5 Notes Panel

**Purpose** — Contain saved notes and fetch states. Use for the only read-only list surface.

**Anatomy** — `[panel head: title + state copy + status chip] [preview state switch] [board state region]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-surface-raised`, `--color-border`, `--radius-panel`, `--shadow-lg` | Notes list container |
| Production | Same panel minus preview-only state switch | Real app build |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Header | content-led | `20px 22px` | `--text-lg`, `--text-sm` |
| Board | min `444px` | `22px` | inherited |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White raised card with gradient header | `--color-surface-raised`, `--shadow-lg` |
| Hover | No panel hover | none |
| Focus (keyboard) | Focus handled by child buttons | `--color-focus` |
| Active / pressed | No panel active state | none |
| Disabled | Panel is never disabled | none |
| Loading | Board shows spinner, skeleton, loading copy | `--duration-loader`, `--duration-shimmer` |
| Error | Board shows red-tinted card and retry button | `--color-danger-soft`, `--color-danger` |
| Empty | Board shows empty card with read-only explanation | `--color-bg`, `--color-primary-soft` |

**Accessibility** — Panel section has `aria-labelledby`. State regions use `aria-live="polite"` for loading, loaded, empty; `aria-live="assertive"` for error. Production must not include preview-only state switch.

### 2.6 Preview State Button

**Purpose** — Switch design preview between Loading, Populated, Empty, and Error. Do not ship in production product build.

**Anatomy** — `[button label]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Unpressed | `--color-surface`, `--color-border`, `--color-text-subtle` | Available preview state |
| Pressed | `--color-primary`, `--color-primary-text`, `--shadow-primary-active` | Current preview state |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | content-led | `9px 12px` | `--text-sm-tight` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White pill, gray text, neutral border | `--color-surface`, `--color-border`, `--color-text-subtle` |
| Hover | Blue border, primary text, moves up `1px` | `--color-border-selected`, `--color-primary`, `--duration-fast` |
| Focus (keyboard) | 3px blue translucent outline, 4px offset | `--color-focus`, `--border-width-focus` |
| Active / pressed | Primary fill, white text, blue shadow | `--color-primary`, `--color-primary-text`, `--shadow-primary-active` |
| Disabled | Not present in approved design | none |
| Loading | Can select loading preview state | `--duration-state` |
| Error | Can select error preview state | `--color-danger-soft` |
| Empty | Can select empty preview state | `--color-bg` |

**Accessibility** — Button uses native `button`, `type="button"`, and `aria-pressed`. Minimum hit target is slightly under 44px where text is short; record as known deviation.

### 2.7 Status Chip

**Purpose** — Summarize current database-read state in panel header.

**Anatomy** — `[status dot] [status label]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Loaded | `--color-success-soft`, `--color-success-text`, `--color-border-success` | Notes loaded |
| Empty | `--color-bg`, `--color-text-subtle`, `--color-border-strong` | Database returns no notes |
| Error | `--color-danger-soft`, `--color-danger-strong`, `--color-border-danger` | Database read fails |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | content-led | `8px 11px` | `--text-sm-tight` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Loaded green status | `--color-success-soft`, `--color-success-text` |
| Hover | No hover state | none |
| Focus (keyboard) | Not focusable | none |
| Active / pressed | Not interactive | none |
| Disabled | Not interactive | none |
| Loading | Label changes to Loading; approved script keeps loaded colors | `--color-success-soft`, `--color-success-text` |
| Error | Red-tinted background, dark red text, red border | `--color-danger-soft`, `--color-danger-strong`, `--color-border-danger` |
| Empty | Pale background, gray text, stronger border | `--color-bg`, `--color-text-subtle`, `--color-border-strong` |

**Accessibility** — Status text updates in header. Dot is decorative with `aria-hidden="true"`. Do not rely on color alone; label text must change with state.

### 2.8 Note List and Note Card

**Purpose** — Display saved notes from database. Do not add edit, delete, search, or create controls.

**Anatomy** — `[ul note-list] [li note: title + updated date + body + optional tags]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default note | `--color-surface`, `--color-border`, `--radius-card` | Each saved note |
| Hover note | `--shadow-note-hover`, `--color-border-selected` | Pointer hover only |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| List | content-led | none | inherited |
| Note card | content-led | `18px` | `--text-base`, `--text-note-title` |
| Tag | content-led | `6px 9px` | `--text-xs` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White card, neutral border, title/date/body/tags | `--color-surface`, `--color-border` |
| Hover | Moves up `2px`, soft shadow, blue border | `--shadow-note-hover`, `--color-border-selected`, `--duration-fast` |
| Focus (keyboard) | Note card is not focusable because it has no actions | none |
| Active / pressed | Not interactive | none |
| Disabled | Not interactive | none |
| Loading | Replaced by loading state card and skeleton | `--duration-shimmer` |
| Error | Replaced by error state card | `--color-danger-soft` |
| Empty | Replaced by empty state card | `--color-bg` |

**Accessibility** — Use `ul` with `aria-label="Saved notes list"`. Each note is an `li`. Dates are text. No hidden controls. Hover cannot be only source of information.

### 2.9 Loading State Card

**Purpose** — Show database read in progress.

**Anatomy** — `[spinner] [h3] [copy] [skeleton lines]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-bg`, `--color-border-strong`, `--radius-card` | Notes fetch pending |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| State card | min `380px` | `30px` | `--text-2xl`, `--text-base` |
| Loader | `48px` | none | none |
| Skeleton | max `420px` | none | none |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Centered spinner and skeleton on dashed card | `--color-bg`, `--color-border-strong` |
| Hover | No hover state | none |
| Focus (keyboard) | Not focusable | none |
| Active / pressed | Not interactive | none |
| Disabled | Not interactive | none |
| Loading | Spinner rotates and skeleton shimmers | `--duration-loader`, `--duration-shimmer`, `--easing-linear` |
| Error | Loading card replaced by error card | `--color-danger-soft` |
| Empty | Loading card replaced by empty card | `--color-bg` |

**Accessibility** — Loading panel uses `aria-live="polite"`. Spinner and skeleton are `aria-hidden="true"`. Text says notes are being read from database.

### 2.10 Empty State Card

**Purpose** — Explain empty database result without offering creation.

**Anatomy** — `[icon] [h3] [copy]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-bg`, `--color-border-strong`, `--color-primary-soft`, `--color-primary` | No notes returned |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| State card | min `380px` | `30px` | `--text-2xl`, `--text-base` |
| Icon tile | `64px` | none | none |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Centered empty copy on dashed pale card | `--color-bg`, `--color-border-strong` |
| Hover | No hover state | none |
| Focus (keyboard) | Not focusable | none |
| Active / pressed | Not interactive | none |
| Disabled | Not interactive | none |
| Loading | Empty card replaced by loading card | `--duration-state` |
| Error | Empty card replaced by error card | `--color-danger-soft` |
| Empty | Explains database returned empty list and no creation action exists | `--color-primary-soft`, `--color-primary` |

**Accessibility** — Empty panel uses `aria-live="polite"`. Icon is `aria-hidden="true"`. Copy states what is missing and why there is no add action.

### 2.11 Error State Card and Retry Button

**Purpose** — Show database read failure and allow retry. Use only for recoverable read failure.

**Anatomy** — `[error icon] [h3] [copy] [retry button]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Error card | `--color-danger-soft`, `--color-border-danger`, `--color-danger` | Read failure |
| Retry button | `--color-danger`, `--color-primary-text`, `--shadow-danger-action` | Retry read |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| State card | min `380px` | `30px` | `--text-2xl`, `--text-base` |
| Retry button | content-led | `11px 16px` | inherited, weight `800` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Red-tinted card, red icon, red retry pill | `--color-danger-soft`, `--color-danger` |
| Hover | Retry moves up `1px`, darkens to strong danger | `--color-danger-strong`, `--duration-fast` |
| Focus (keyboard) | Retry gets 3px blue translucent outline, 4px offset | `--color-focus`, `--border-width-focus` |
| Active / pressed | Native button press; approved design has no separate pressed style | `--color-danger` |
| Disabled | Not present in approved design | none |
| Loading | Retry triggers loading state before loaded state in preview | `--duration-demo-retry`, `--duration-loader` |
| Error | Current state | `--color-danger-soft`, `--color-border-danger` |
| Empty | Error card replaced by empty card if database returns empty list | `--color-bg` |

**Accessibility** — Error panel uses `aria-live="assertive"`. Retry is native button with visible focus. Error icon is `aria-hidden="true"`. Button text describes action: `Retry loading`.

### 2.12 Detail Card

**Purpose** — Reinforce product boundaries below main panel. Do not use for extra feature marketing.

**Anatomy** — `[strong title] [supporting span]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-surface-muted`, `--color-border`, `--radius-card` | Boundary notes |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | content-led | `18px` | `--text-sm`, inherited title |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Translucent white card with muted body copy | `--color-surface-muted`, `--color-text-muted` |
| Hover | No hover state | none |
| Focus (keyboard) | Not focusable | none |
| Active / pressed | Not interactive | none |
| Disabled | Not interactive | none |
| Loading | Remains visible during loading | none |
| Error | Remains visible during error | none |
| Empty | Remains visible during empty | none |

**Accessibility** — Details section has `aria-label="Product boundaries"`. Strong text names each boundary. Body copy stays readable at 14px.

## 3. Content and formatting

- Voice and tone: calm, plain, pragmatic; no hype, no jokes, no emoji.
- Date format: `Updated Apr 18, 2026` pattern, English month abbreviation, day without leading zero, four-digit year.
- Time format: not used in approved design.
- Number format: plain Arabic numerals, example `3 notes loaded from database`.
- Currency format: not used.
- Locale: English (`lang="en"`).
- Capitalization rule for buttons, headings, and labels: sentence case for headings and buttons; title-like short nouns allowed for preview labels such as `Loading`, `Populated`, `Empty`, `Error`.
- Empty-state wording pattern: name missing content, then state database returned empty list, then explain no creation action because screen is read-only.
- Error-message wording pattern: state what failed, say it happened while reading saved notes, offer retry only.
- Scope copy must preserve explicit exclusions: no add, edit, delete, search, or auth.

## 4. Known deviations

Places where the approved design does not follow its own rules or the anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Body background and brand mark | Uses gradients as decoration: radial page glow, vertical page gradient, brand mark gradient, panel-head gradient, skeleton shimmer gradient | Approved design uses calm blue visual polish; documented as-is | Keep gradients unless stakeholder asks for flatter visual style |
| Spacing scale | Many one-off spacing values appear: `5px`, `9px`, `11px`, `13px`, `21px`, `22px`, `26px`, `34px`, `38px`, `52px` | Approved CSS uses exact optical spacing, not strict 4px scale | Dev should reuse listed values for this screen; tighten to 4px scale only with design approval |
| Border contrast | Decorative borders such as `#E2E8F0` on `#FFFFFF` and `#CBD5E1` on `#F8FAFC` are below 3:1 | Borders are decorative separators, not sole affordance | If borders become required UI boundaries, darken with design approval |
| Motion | No `prefers-reduced-motion: reduce` override exists | Approved HTML lacks reduced-motion handling | Add reduced-motion CSS only with design approval or accessibility remediation story |
| Preview controls | Loading/Populated/Empty/Error controls are present in approved mockup | Memory records them as preview-only documentation tools | Dev must omit controls from real product build |
| Preview state buttons | Some preview buttons may be under 44px minimum hit target due to `9px 12px` padding and short labels | Controls are preview-only and not production UI | No production follow-up unless controls ship |
| Loading status chip | Loading state label uses loaded green chip colors in script | Approved behavior keeps status chip green except empty/error overrides | Consider neutral loading chip only with design approval |
| AI defaults check | Design avoids purple/indigo defaults, emoji iconography, filler copy, generic feature grid, missing loading/error/empty states, hover-only critical affordances, text over images | Approved design already meets these checks | No follow-up |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2026-08-13 | Initial design system extracted from approved `index.html` | This PR |
