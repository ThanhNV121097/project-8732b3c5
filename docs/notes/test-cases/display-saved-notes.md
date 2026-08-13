# Test Cases — Display saved notes

Module: `notes`
Function: Display saved notes
Risk level: Low. Single read-only screen, no writes, auth, or user input; main risk is state confusion or forbidden controls appearing.

## Automated coverage

**Scenario**: AC-1 — Loading state appears while notes request is pending
**Given**: Saved notes request is pending
**When**: Visitor opens "Note Board"
**Then**: Notes area displays a loading state before notes data resolves

Trace: NOTES-001, AC-1

**Scenario**: AC-2 — Loading state exposes no forbidden controls
**Given**: Saved notes request is pending
**When**: Visitor views available controls
**Then**: No add, edit, delete, search, or sign-in control is visible

Trace: NOTES-001, AC-2

**Scenario**: AC-3 — One saved note displays as one item
**Given**: Saved notes contain one note with content `Buy milk`
**When**: Visitor opens "Note Board"
**Then**: Notes area displays exactly one note item with content `Buy milk`

Trace: NOTES-002, AC-3

**Scenario**: AC-4 — Multiple saved notes display as separate read-only items
**Given**: Saved notes contain three notes with content `Buy milk`, `Call Sam`, and `Plan trip`
**When**: Visitor opens "Note Board"
**Then**: Notes area displays three separate read-only note items, one for `Buy milk`, one for `Call Sam`, and one for `Plan trip`

Trace: NOTES-002, AC-4

**Scenario**: AC-5 — Populated state exposes no forbidden controls
**Given**: Saved notes contain multiple notes
**When**: Visitor views available controls
**Then**: No add, edit, delete, search, or sign-in control is visible

Trace: NOTES-002, AC-5

**Scenario**: AC-6 — Empty state appears for zero notes
**Given**: Saved notes response contains zero notes
**When**: Visitor opens "Note Board"
**Then**: Notes area displays an empty state

Trace: NOTES-003, AC-6

**Scenario**: AC-7 — Empty state has no add-note call to action
**Given**: Saved notes response contains zero notes
**When**: Visitor views empty state
**Then**: Empty state has no add-note call to action

Trace: NOTES-003, AC-7

**Scenario**: AC-8 — Error state appears when saved notes fail to load
**Given**: Saved notes request fails
**When**: Visitor opens "Note Board"
**Then**: Notes area displays an error state

Trace: NOTES-004, AC-8

**Scenario**: AC-9 — Error state is not shown as empty notes list
**Given**: Saved notes request fails
**When**: Visitor compares page state
**Then**: Notes area displays an error state and does not display empty-state text or a zero-note list

Trace: NOTES-004, AC-9

## Manual coverage

None. Required outcomes are observable through UI state and DOM assertions.
