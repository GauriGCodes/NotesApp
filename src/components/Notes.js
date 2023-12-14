import Header from "./Header";
import "./css/Notes.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


function Notes() {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);


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
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          cols={10}
          name="content"
          placeholder="Take a note..."
          value={content}
        />
        <button onClick={onSubmit}>Add</button>
      </div>
      <div className="Notes-Container">
        {notes.map((note) => (
          <div className="Note" key={note.index}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button
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
