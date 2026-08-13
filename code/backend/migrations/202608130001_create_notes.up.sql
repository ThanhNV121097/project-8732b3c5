CREATE TABLE notes (
  id BIGSERIAL PRIMARY KEY,
  content TEXT NOT NULL CHECK (length(trim(content)) > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ
);

CREATE INDEX notes_created_at_id_idx ON notes (created_at DESC, id DESC);
