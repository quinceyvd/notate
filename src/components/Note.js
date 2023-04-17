import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FiEdit2, FiBookOpen, FiTrash2, FiCheckCircle } from 'react-icons/fi';

function Note({ activeNote }) {
  const [note, setNote] = useState({});
  const [edit, setEdit] = useState(false);

  // Load the active note from props or localStorage on component mount or activeNote change
  useEffect(() => {
    if (activeNote) {
      setNote(activeNote);
    } else {
      const activeNoteString = localStorage.getItem('activeNote');
      if (activeNoteString) {
        const activeNoteObject = JSON.parse(activeNoteString);
        setNote(activeNoteObject);
      }
    }
  }, [activeNote]);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const saveNote = () => {
    const updatedNote = {
      ...note,
      note: document.querySelector('textarea').value,
      date: new Date().toLocaleString() // Update note date with current date and time
    };
    setNote(updatedNote);
    localStorage.setItem('activeNote', JSON.stringify(updatedNote));
    setEdit(false);

    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteIndex = existingNotes.findIndex(n => n.id === note.id);
    if (noteIndex !== -1) {
      existingNotes[noteIndex] = updatedNote;
    } else {
      existingNotes.push(updatedNote);
    }
    localStorage.setItem('notes', JSON.stringify(existingNotes));
  };

  const deleteNote = () => {
    if (window.confirm(`You are about to delete the note "${note.title}". This action can not be undone. Are you sure you want to continue?`)) {
      const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
      const noteIndex = existingNotes.findIndex(n => n.id === note.id);
      if (noteIndex !== -1) {
        existingNotes.splice(noteIndex, 1);
        localStorage.setItem('notes', JSON.stringify(existingNotes));
        setNote({});
        setEdit(false);
      }
      localStorage.removeItem('activeNote');
      window.location.reload();
    } else {
      return;
    }
  }


  if (!localStorage.getItem('activeNote')) {
    return <div className="Note"><h4>No note selected...</h4></div>;
  } else {
    document.title = `Notate - ${note.title}`;
    return (
      <div className="Note">
        <div className="flexRow">
          <div style={{ width: "800px" }}>
            <h3>{note.title}</h3>
            <span><samp>{note.date}</samp></span>
          </div>
          <button title="Toggle view/edit" className="icoBtn" onClick={() => toggleEdit()}>{edit ? (<FiBookOpen />) : (<FiEdit2 />)}</button>
          <button title="Delete note" className="icoBtnRed" onClick={() => deleteNote()}><FiTrash2 /></button>
        </div>
        <hr />
        {
          edit ? (
            <>
              <textarea style={{ width: "800px", height: "400px" }} defaultValue={note.note}></textarea>
              <button title="Save changes" className="icoBtn" onClick={() => saveNote()}><FiCheckCircle /></button>
            </>
          )
            : (<ReactMarkdown>{note.note}</ReactMarkdown>)
        }
      </div>
    );
  }
}

export default Note;