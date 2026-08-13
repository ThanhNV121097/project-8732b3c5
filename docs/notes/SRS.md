# SRS — Notes

Module: `notes`
Last updated: 2026-08-13
Design: [View Design](http://localhost:8080/design/8732b3c5-95e5-4a93-87ef-fc67e299bfda)
Design system: `design/design-system.md`

## 1. Purpose

Notes module lets any visitor view notes already saved for "Note Board" on one read-only web page. It exists so saved note content can be checked without edit, delete, search, or authentication flows. If this module does not exist, product has no user-facing capability.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Any person opening "Note Board" without signing in | View saved notes and system states for loading, empty data, and load failure |
| Operator | Person or process that maintains data outside this product scope | May seed or maintain saved notes outside this UI; cannot use this module to add, edit, delete, or search notes |

## 3. Scope

**In scope** — functions specified below, by plan title:

- Display saved notes

**Out of scope** — reasonable expectations deliberately not built:

- Add notes — deliberately not built; product is read-only.
- Edit notes — deliberately not built; product is read-only.
- Delete notes — deliberately not built; product is read-only.
- Search or filter notes — deliberately not built; scope is one list.
- Authentication or user accounts — deliberately not built; list is available without sign-in.
- Note detail pages — deliberately not built; product has one screen.

## 4. Functional requirements

### 4.1 Display saved notes

**Requirement NOTES-001 — Show loading state**

*As a* Visitor, *I want to* see that notes are loading, *so that* I know the page is working while saved notes are being fetched.

Behaviour:

1. Visitor opens the "Note Board" page.
2. While saved notes have not finished loading, page displays a loading state in the notes area.
3. Loading state does not expose controls for adding, editing, deleting, searching, or signing in.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/notes/test-cases/display-saved-notes.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Saved notes request is pending | Visitor opens "Note Board" | Notes area displays a loading state |
| AC-2 | Saved notes request is pending | Visitor views available controls | No add, edit, delete, search, or sign-in control is visible |

**Requirement NOTES-002 — Show populated notes list**

*As a* Visitor, *I want to* see saved notes in a read-only list, *so that* I can read existing note content.

Behaviour:

1. Visitor opens the "Note Board" page.
2. When one or more saved notes are available, page displays each note as an item in one list.
3. Each note item shows saved note content in read-only form.
4. The populated state does not expose controls for adding, editing, deleting, searching, or signing in.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/notes/test-cases/display-saved-notes.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-3 | Saved notes contain one note | Visitor opens "Note Board" | Notes area displays one note item with that note content |
| AC-4 | Saved notes contain multiple notes | Visitor opens "Note Board" | Notes area displays every saved note as a separate read-only item |
| AC-5 | Saved notes contain multiple notes | Visitor views available controls | No add, edit, delete, search, or sign-in control is visible |

**Requirement NOTES-003 — Show empty state**

*As a* Visitor, *I want to* see a clear empty state when no saved notes exist, *so that* I understand there is nothing to display.

Behaviour:

1. Visitor opens the "Note Board" page.
2. When saved notes load successfully and no notes exist, page displays an empty state in the notes area.
3. Empty state does not include any call to action for adding a note.
4. Empty state does not expose controls for editing, deleting, searching, or signing in.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/notes/test-cases/display-saved-notes.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-6 | Saved notes response contains zero notes | Visitor opens "Note Board" | Notes area displays an empty state |
| AC-7 | Saved notes response contains zero notes | Visitor views empty state | Empty state has no add-note call to action |

**Requirement NOTES-004 — Show error state**

*As a* Visitor, *I want to* see an error state when saved notes cannot load, *so that* I know the list failed instead of appearing empty.

Behaviour:

1. Visitor opens the "Note Board" page.
2. When saved notes fail to load, page displays an error state in the notes area.
3. Error state is visually distinct from the empty state.
4. Error state does not expose controls for adding, editing, deleting, searching, or signing in.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/notes/test-cases/display-saved-notes.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-8 | Saved notes request fails | Visitor opens "Note Board" | Notes area displays an error state |
| AC-9 | Saved notes request fails | Visitor compares page state | Error state is not presented as an empty notes list |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input | Visitor provides query text, note data, credentials, or mutation input through the UI | No field or control accepts it, because module has no user input capability |
| Boundary | Saved notes response contains zero notes | Empty state appears, not an error and not a blank notes area |
| Boundary | Saved notes response contains one note | One read-only note item appears |
| Boundary | Saved notes response contains many notes | Every returned note appears in one read-only list without horizontal page scroll |
| Missing data | A saved note has optional metadata missing | Note remains visible if required display content exists |
| Not permitted | Visitor attempts to add, edit, delete, search, or sign in from this module | No such action is available in the UI |
| Upstream failure | Saved notes cannot be loaded | Error state appears; page does not show stale, partial, or misleading empty content |
| Concurrency | Saved notes change while Visitor is viewing page | Current page state remains readable; latest data may appear after next load or refresh |

**Data touched** — fields this function reads and writes, in product terms.

| Field | Type | Required | Rule |
|---|---|---|---|
| note id | identifier | yes | Uniquely identifies a saved note for stable rendering |
| note content | text | yes | Displayed as read-only note content |
| note created time | date/time | no | May be displayed if available in saved data |
| note updated time | date/time | no | May be displayed if available in saved data |

## 5. Screens

Design: [View Design](http://localhost:8080/design/8732b3c5-95e5-4a93-87ef-fc67e299bfda)

Main design decisions:

- Single Notes screen for "Note Board".
- Read-only notes list only.
- Loading, populated, empty, and error states exist for notes area.
- Preview-only state controls shown in design documentation must not appear in product build.
- Palette: `#2563EB` primary, `#F8FAFC` background, `#FFFFFF` surface, `#10B981` success accent, `#DC2626` error.
- Visual style: neutral blue, minimal motion, calm pragmatic look.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Notes | Single read-only Note Board screen | NOTES-001, NOTES-002, NOTES-003, NOTES-004 | loading, populated, empty, error |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Notes page initial state appears within 1 second on a typical broadband connection; loaded list state appears within 2 seconds after saved notes data becomes available |
| Accessibility | Notes page supports keyboard navigation, visible focus for any interactive browser controls, semantic headings, and text contrast ratio at least 4.5:1 |
| Responsive | Notes page works from 320px viewport width and up with no horizontal page scroll |
| Privacy | Page displays only saved note fields required for viewing notes; no authentication data is collected |

## 7. Dependencies and assumptions

- **Depends on:** saved notes data source, for reading existing notes.
- **Depends on:** approved design and design system, for visual states and styling.
- **Assumption:** Saved notes already exist in database or data source outside this module's write scope. If false, product still shows empty state.
- **Assumption:** Notes are public to any Visitor. If false, authentication would be new scope and must be added as separate plan item.
- **Assumption:** Note content text is safe for display after normal output escaping. If false, TL must specify sanitisation rules in architecture.

| Open question | Proposed default | Who decides |
|---|---|---|
| Maximum number of notes displayed on one page | Display all notes returned by data source for this first version | TL |
| Exact note ordering | Use data source default stable order for this first version | TL |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Display saved notes | NOTES-001, NOTES-002, NOTES-003, NOTES-004 | `docs/notes/test-cases/display-saved-notes.md` |
