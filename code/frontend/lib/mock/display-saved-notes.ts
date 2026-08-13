export type Note = {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export type NotesResponse = {
  notes: Note[];
  next_cursor: string | null;
  has_more: boolean;
};

export type NotesErrorResponse = {
  error: {
    code: "VALIDATION_FAILED" | "NOT_FOUND" | "RATE_LIMITED" | "INTERNAL" | "UNAVAILABLE";
    message: string;
    details: Array<{ field: string; code: string; message: string }>;
    request_id: string;
  };
};

const populatedNotes: NotesResponse = {
  notes: [
    {
      id: "01989df3-0000-7000-8000-000000000000",
      content: "Buy milk",
      created_at: "2026-08-13T12:30:45Z",
      updated_at: "2026-08-13T12:30:45Z",
    },
    {
      id: "01989df3-0000-7000-8000-000000000001",
      content: "Call Sam about markup-like text: <script>alert('safe text')</script>",
      created_at: "2026-08-12T09:10:00Z",
      updated_at: "2026-08-12T09:10:00Z",
    },
    {
      id: "01989df3-0000-7000-8000-000000000002",
      content: "Plan trip",
      created_at: "2026-08-11T17:45:21Z",
      updated_at: "2026-08-11T17:45:21Z",
    },
  ],
  next_cursor: null,
  has_more: false,
};

const emptyNotes: NotesResponse = { notes: [], next_cursor: null, has_more: false };

const failure: NotesErrorResponse = {
  error: {
    code: "UNAVAILABLE",
    message: "Saved notes could not load. Try again.",
    details: [],
    request_id: "01HXNOTEBOARDMOCK",
  },
};

let callCount = 0;

export async function getSavedNotes(): Promise<NotesResponse> {
  callCount += 1;
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (process.env.NEXT_PUBLIC_NOTES_MOCK_STATE === "empty") return emptyNotes;
  if (process.env.NEXT_PUBLIC_NOTES_MOCK_STATE === "error") throw failure;

  return populatedNotes;
}

export function resetSavedNotesMock() {
  callCount = 0;
}

export function getSavedNotesMockCallCount() {
  return callCount;
}
