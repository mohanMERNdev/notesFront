import React, { useState } from "react";
import Form from "./components/Form";
import NotesList from "./components/NotesList";
import "./styles.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const updateNote = (id, updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Personal Notes Manager</h1>
      <Form addNote={addNote} />
      <NotesList
        notes={notes}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
