import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import NewNote from './components/NewNote';
import Footer from './components/Footer';
import NotesSidebar from './components/NotesSidebar';
import Note from './components/Note';
import './App.css';

document.title = 'Notate';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');
  const [activeNote, setActiveNote] = useState(JSON.parse(localStorage.getItem('activeNote')) || null);
  const [isNewNoteVisible, setNewNoteVisible] = useState(false); // State for NewNote visibility
  const [isNotesVisible, setNotesVisible] = useState(false); // State for Notes visibility

  const toggleTheme = () => {
    if (theme === '') {
      setTheme('DarkMode');
      localStorage.setItem('theme', 'DarkMode');
    } else {
      setTheme('');
      localStorage.setItem('theme', '');
    }
  }

  const handleNoteSelect = (note) => {
    setActiveNote(note);
    localStorage.setItem('activeNote', JSON.stringify(note));
  }

  const handleNewNoteToggle = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setNewNoteVisible(!isNewNoteVisible);
  }

  const handleNotesToggle = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setNotesVisible(!isNotesVisible);
  }

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} handleNewNoteToggle={handleNewNoteToggle} handleNotesToggle={handleNotesToggle} />
      <div className="Container">
        <NotesSidebar onNoteSelect={handleNoteSelect} />
        <div className="main">
          {isNewNoteVisible && <NewNote />}
          {isNotesVisible && <Notes />}
          <Note activeNote={activeNote} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
