import React from 'react';
import Modal from 'react-modal';
import { FaGithub } from 'react-icons/fa';


function HowToUse() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    if (localStorage.getItem("theme") === "") {
        return (
            <>
                <button class="anchorBtn" onClick={openModal}>About</button>
                <Modal
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        content: {
                            position: 'absolute',
                            border: 'none',
                            overflow: 'auto',
                            outline: 'none',
                            padding: '1rem',
                            paddingTop: '0',
                            fontFamily: 'inherit',
                            top: '100px',
                            bottom: '100px',
                            left: '100px',
                            right: '100px',
                        },
                    }}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                >
                    <h2>Welcome to Notate</h2>
                    <p>
                        Notate is a minimalist note-taking app that helps you capture your ideas and thoughts. With a clean and intuitive interface,
                        Notate allows you to create and edit notes with ease. Notate offers a straightforward text editing experience, allowing you to format your notes as needed.
                        You can easily create new notes and edit existing ones, and you can use markdown syntax to stylize them.
                    </p>
                    <h4><a href="https://www.github.com/quinceyvd/notate"><FaGithub /> GitHub repo</a></h4>
                    <hr />
                    <button class="textBtn" onClick={closeModal}>close</button>
                </Modal>
            </>
        );
    } else {
        return (
            <>
                <button class="anchorBtn" onClick={openModal}>About</button>
                <Modal
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        content: {
                            position: 'absolute',
                            background: 'var(--darkgray)',
                            color: 'var(--gray-light)',
                            border: 'none',
                            overflow: 'auto',
                            outline: 'none',
                            padding: '1rem',
                            paddingTop: '0',
                            fontFamily: 'inherit',
                            top: '100px',
                            bottom: '100px',
                            left: '100px',
                            right: '100px',
                        },
                    }}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                >
                    <h2>Welcome to Notate</h2>
                    <p>
                        Notate is a minimalist note-taking app that helps you capture your ideas and thoughts. With a clean and intuitive interface,
                        Notate allows you to create and edit notes with ease. Notate offers a straightforward text editing experience, allowing you to format your notes as needed.
                        You can easily create new notes and edit existing ones, and you can use markdown syntax to stylize them.
                    </p>
                    <h4><a href="https://www.github.com/quinceyvd/notate"><FaGithub /> GitHub repo</a></h4>
                    <hr />
                    <button class="textBtn" onClick={closeModal}>close</button>
                </Modal>
            </>
        );
    }
}

export default HowToUse;