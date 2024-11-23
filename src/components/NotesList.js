import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes, updateNote, deleteNote }) => {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            updateNote={updateNote}
            deleteNote={deleteNote}
          />
        ))
      ) : (
        <p className="empty-message">No notes available. Add a new note!</p>
      )}
    </div>
  );
};

export default NotesList;
