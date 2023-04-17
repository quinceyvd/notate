import React, { useState } from 'react';
import { FiSave } from "react-icons/fi";

function NewNote() {
    // Define states to store user inputs and all notes saved in the local storage
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [setNotes] = useState([]);

    // Create a unique ID for each note
    const createUniqueID = () => {
        const lsNotes = localStorage.getItem('notes');
        let potentialID;
        do {
            potentialID = Math.floor(Math.random() * 10000);
        } while (lsNotes && lsNotes.includes(potentialID));
        return potentialID;
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new note object from the user inputs and the current date
        const newNote = {
            date: new Date().toLocaleString(),
            id: createUniqueID(),
            title: noteTitle,
            note: noteContent,
        };

        // Add the new note object to the existing notes array and save to localStorage
        const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
        const updatedNotes = [...existingNotes, newNote];
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        localStorage.setItem('activeNote', JSON.stringify(newNote));

        // Reset the input states and update the notes state with the new note
        setNoteTitle('');
        setNoteContent('');
        setNotes(updatedNotes);
    }

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className="NewNote">
            <h2 style={{ marginTop: "6rem" }}>Scribble away...</h2>
            {/* User input form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Click to add title.."
                    value={noteTitle}
                    onChange={(event) => setNoteTitle(event.target.value)}
                    required
                />
                <br />

                <textarea
                    id="note"
                    name="note"
                    placeholder="Click to add content.."
                    value={noteContent}
                    onChange={(event) => setNoteContent(event.target.value)}
                    required
                ></textarea>
                <br />
                
                <button title="Save new note" className="icoBtn" style={{marginLeft: ".5rem"}} type="submit" onClick={reloadPage}><FiSave /></button>
            </form>
        </div>
    )
}

export default NewNote;