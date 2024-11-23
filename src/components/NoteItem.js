import React, { useState } from "react";

const NoteItem = ({ note, updateNote, deleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleEdit = () => {
    updateNote(note.id, editedNote);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedNote.title}
            onChange={(e) =>
              setEditedNote({ ...editedNote, title: e.target.value })
            }
          />
          <textarea
            value={editedNote.description}
            onChange={(e) =>
              setEditedNote({ ...editedNote, description: e.target.value })
            }
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <span className="category">{note.category}</span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteItem;
