import React, { useState } from "react";

const Form = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Others");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description are required!");
      return;
    }
    const newNote = {
      id: Date.now(),
      title,
      description,
      category,
      created_at: new Date().toISOString(),
    };
    addNote(newNote);
    setTitle("");
    setDescription("");
    setCategory("Others");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default Form;
