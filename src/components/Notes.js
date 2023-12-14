<<<<<<< HEAD
import Header from "./Header";
import "./css/Notes.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
=======
import { useLayoutEffect } from "react";
import "./css/Notes.css";
import { useRef, useState } from "react";
>>>>>>> 292e1ced747f00a34226f36528c5c37e86d7b655


function Notes() {
<<<<<<< HEAD
  
=======
  const textareaAref = useRef(null);
>>>>>>> 292e1ced747f00a34226f36528c5c37e86d7b655
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

<<<<<<< HEAD

   useEffect(() => {
    axios.get('http://localhost:8000/getNotes')
      .then(response => {
        setNotes(response.data.notes);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); 

  const onSubmit = (e) => {
    e.preventDefault();
    const newNote = { user: "123", title: title, content: content, index: uuidv4() };
    setNotes(prevNotes => [...prevNotes, newNote]); 
    axios.post('http://localhost:8000/addNote', {note:newNote}).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err);
    })
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <Header />
=======
  const onChange = (e) => setContent(e.target.value);
  const onSubmit = (e) => {
    const Height = textareaAref.current.scrollHeight;
    console.log(Height);
    setNotes([...notes, { title: title, content: content, index: ID++ }]);
    setTitle("");
    setContent("");
  };

  useLayoutEffect(() => {
    textareaAref.current.style.height = "inherit";
    textareaAref.current.style.height = `${Math.max(
      textareaAref.current.scrollHeight,
      MIN_TEXT_HEIGHT,
    )}px`;
  }, [content]);

  return (
    <div>
>>>>>>> 292e1ced747f00a34226f36528c5c37e86d7b655
      <div className="Notes">
        <input
          type="text"
          name="title"
          className="content"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
<<<<<<< HEAD
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          cols={10}
          name="content"
          placeholder="Take a note..."
          value={content}
=======
          onChange={onChange}
          ref={textareaAref}
          style={{
            minHeight: MIN_TEXT_HEIGHT,
            resize: "none",
          }}
          name="content"
          placeholder="Take a note..."
          value={content}
          wrap="soft"
>>>>>>> 292e1ced747f00a34226f36528c5c37e86d7b655
        />
        <button onClick={onSubmit}>Add</button>
      </div>
      <div className="Notes-Container">
        {notes.map((note) => (
          <div className="Note" key={note.index}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button
<<<<<<< HEAD
              id="delete"
              onClick={() => {
                setNotes(notes.filter((n) => n.index !== note.index));
                axios.delete(`http://localhost:8000/deleteNote/${note.index}`)
                  .then(response => {
                      console.log(response.data);
                  })
                  .catch(error => {
                      console.error('Error deleting note:', error);
                  });
=======
              onClick={() => {
                setNotes(notes.filter((n) => n.index !== note.index));
>>>>>>> 292e1ced747f00a34226f36528c5c37e86d7b655
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
