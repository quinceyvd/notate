import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react';
import { FiTrash2, FiCopy } from 'react-icons/fi';

function Notes() {
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

    const handleDelete = (note) => {
        if (window.confirm(`You are about to delete note "${note.title}". This can not be undone. Are you sure you want to continue?`)) {
            const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
            const noteIndex = existingNotes.findIndex(n => n.id === note.id);
            if (noteIndex !== -1) {
                existingNotes.splice(noteIndex, 1);
                localStorage.setItem('notes', JSON.stringify(existingNotes));
                setNotes(existingNotes);
            }
            localStorage.removeItem('activeNote');
            window.location.reload();
        } else {
            return;
        }
    }

    const handleCopy = (note) => {
        const noteString = note.note;
        navigator.clipboard.writeText(noteString);
        alert('Markdown copied to clipboard!')
    }

    return (
        <div className="Notes">
            {/* Display all saved notes */}
            <h2>Overview</h2>
            <div>
                {
                notes < 1
                ? <p>No notes saved yet.</p>
                : notes.map((note, index) => (
                    <div className="note" key={index}>
                        <div className="flexRow">
                            <h3>{note.title}</h3>
                            <span>
                                <samp>{note.date}</samp>
                            </span>
                        </div>
                        <div className="markdown">
                            <ReactMarkdown>
                                {note.note}
                            </ReactMarkdown>
                        </div>
                        <div className="flexEnd">
                            <button title="Copy note markdown syntax" onClick={() => handleCopy(note)} className="icoBtn"><FiCopy /></button>
                            <button title="Delete note" style={{color: 'red'}} onClick={() => handleDelete(note)} className="icoBtn"><FiTrash2 /></button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Notes;
