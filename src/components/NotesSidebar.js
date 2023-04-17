import React, { useState, useEffect } from 'react';

function NotesSidebar(props) {
  const [notes, setNotes] = useState([]);

  // Load all notes from localStorage on component mount
  useEffect(() => {
    const noteString = localStorage.getItem('notes');
    if (noteString) {
      const noteObject = JSON.parse(noteString);
      const sortedNotes = noteObject.sort((a, b) => new Date(b.date) - new Date(a.date));
      setNotes(sortedNotes);
    }
  }, []);

  // Handle note activation by id
  const activateNote = (id) => {
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const activeNote = existingNotes.find((note) => note.id === id);
    props.onNoteSelect(activeNote);
  }

  return (
    <div className="NotesSidebar">
      <div className="sidebarNotes">
        <h3 style={{
          marginTop: '120px',
          marginLeft: '10px',
        }}>Notes</h3>
        {notes.map((note, index) => (
          <div key={index} className="sidebarNote">
            <button onClick={() => activateNote(note.id)} className="sidebarBtn">
              <h4 style={{ fontWeight: 'normal' }}>
                {
                  // If the note title is too long, shorten it and add ellipsis
                  note.title.length > 20
                    ? note.title.substring(0, 20) + '...'
                    : note.title
                }
              </h4>
              <span>
                <samp>{note.date}</samp>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesSidebar;