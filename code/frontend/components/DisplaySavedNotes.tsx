"use client";

import { useCallback, useEffect, useState } from "react";
import { getSavedNotes, type Note, type NotesErrorResponse } from "../lib/mock/display-saved-notes";
import styles from "./DisplaySavedNotes.module.css";

type ViewState =
  | { kind: "loading" }
  | { kind: "loaded"; notes: Note[] }
  | { kind: "empty" }
  | { kind: "error"; message: string };

function isNotesErrorResponse(value: unknown): value is NotesErrorResponse {
  return typeof value === "object" && value !== null && "error" in value;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

export default function DisplaySavedNotes() {
  const [state, setState] = useState<ViewState>({ kind: "loading" });

  const load = useCallback(() => {
    let alive = true;
    setState({ kind: "loading" });
    getSavedNotes()
      .then((response) => {
        if (!alive) return;
        setState(response.notes.length ? { kind: "loaded", notes: response.notes } : { kind: "empty" });
      })
      .catch((error: unknown) => {
        if (!alive) return;
        setState({
          kind: "error",
          message: isNotesErrorResponse(error) ? error.error.message : "Saved notes could not load. Try again.",
        });
      });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => load(), [load]);

  return (
    <section className={styles.shell} aria-labelledby="note-board-title">
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Saved notes</p>
        <h1 id="note-board-title" className={styles.title}>Note Board</h1>
        <p className={styles.lead}>Read existing saved notes in one calm, read-only list.</p>
        <ul className={styles.pills} aria-label="Scope facts">
          <li>Read-only</li>
          <li>No auth</li>
          <li>No search</li>
        </ul>
      </div>

      <section className={`${styles.panel} panel`} aria-labelledby="saved-notes-title">
        <header className={styles.panelHeader}>
          <div>
            <h2 id="saved-notes-title" className={styles.panelTitle}>Saved notes</h2>
            <p className={styles.panelCopy}>Loaded from database contract shape.</p>
          </div>
          <span className={`${styles.status} ${styles[state.kind]}`}>
            <span aria-hidden="true" />{state.kind === "loaded" ? "Loaded" : state.kind === "empty" ? "Empty" : state.kind === "error" ? "Error" : "Loading"}
          </span>
        </header>

        <div className={styles.board}>{renderState(state, load)}</div>
      </section>
    </section>
  );
}

function renderState(state: ViewState, retry: () => void) {
  if (state.kind === "loading") {
    return (
      <div className={styles.stateCard} aria-live="polite">
        <span className={styles.spinner} aria-hidden="true" />
        <h3>Loading saved notes</h3>
        <p>Database read in progress.</p>
        <span className={styles.skeleton} aria-hidden="true" />
        <span className={styles.skeletonShort} aria-hidden="true" />
      </div>
    );
  }

  if (state.kind === "empty") {
    return (
      <div className={styles.stateCard} aria-live="polite">
        <h3>No saved notes yet</h3>
        <p>Database returned zero notes. Nothing else appears because creation is out of scope.</p>
      </div>
    );
  }

  if (state.kind === "error") {
    return (
      <div className={styles.errorCard} aria-live="assertive">
        <h3>Notes failed to load</h3>
        <p>{state.message}</p>
        <button className={styles.retry} type="button" onClick={retry}>Retry loading</button>
      </div>
    );
  }

  return (
    <ul className={styles.list} aria-label="Saved notes list" aria-live="polite">
      {state.notes.map((note) => (
        <li className="note-card" key={note.id}>
          <article className={styles.note}>
            <p>{note.content}</p>
            <time dateTime={note.updated_at}>Updated {formatDate(note.updated_at)}</time>
          </article>
        </li>
      ))}
    </ul>
  );
}
