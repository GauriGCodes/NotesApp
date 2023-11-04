import { useLayoutEffect } from "react";
import "./css/Notes.css";
import { useRef, useState } from "react";

const MIN_TEXT_HEIGHT = 60;
let ID = 0;

function Notes() {
  const textareaAref = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

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
        />
        <button onClick={onSubmit}>Add</button>
      </div>
      <div className="Notes-Container">
        {notes.map((note) => (
          <div className="Note" key={note.index}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button
              onClick={() => {
                setNotes(notes.filter((n) => n.index !== note.index));
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
