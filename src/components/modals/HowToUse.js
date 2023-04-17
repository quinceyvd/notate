import React from 'react';
import Modal from 'react-modal';
import { FiTrash2, FiSave, FiEdit, FiArchive, FiSunrise, FiSunset } from "react-icons/fi";


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
                <button class="anchorBtn" onClick={openModal}>How to use</button>
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
                    <h2>How to use</h2>
                    <h3>Navigation</h3>
                    <p>
                        The navigation bar contains 3 buttons which allow users to make use of notate's core functionalities:
                    </p>
                    <ol>
                        <li>
                            <h4><span style={{ fontWeight: "normal", fontSize: "1.4rem", marginLeft: ".5rem" }}><FiEdit /> New note</span></h4>
                            <p>
                                The first button in the navigation bar is the <span style={{ background: "var(--gray-light)" }}><FiEdit /> New note</span> button.
                                Upon clicking, the "New note" interface will be displayed. From here the user can enter a title and provide content for the note.
                                To save the note, the user can click the <span style={{ background: "var(--gray-light)" }}><FiSave /> Save note</span> button.
                            </p>
                        </li>
                        <li>
                            <h4><span style={{ fontWeight: "normal", fontSize: "1.4rem", marginLeft: ".5rem" }}><FiArchive /> Note overview</span></h4>
                            <p>
                                The second button in the navigation bar is the <span style={{ background: "var(--gray-light)" }}><FiArchive /> Note overview</span> button.
                                Upon clicking, an overview containing all notes will pop up. From here the user can quickly copy a note's content (including its Markdown syntax).
                                The user can also easily delete notes using the <span style={{ background: "var(--gray-light)" }}><FiTrash2 /> Bin</span> button.
                            </p>
                        </li>
                        <li>
                            <h4><span style={{ fontWeight: "normal", fontSize: "1.4rem", marginLeft: ".5rem" }}><FiSunrise /> Toggle light mode / <FiSunset /> Dark mode</span></h4>
                            <p>
                                The third button in the navigation bar is the <span style={{ background: "var(--gray-light)" }}><FiSunrise /> Toggle light mode / <FiSunset /> Dark mode</span> button.
                                Upon clicking, the color theme of the application will be toggled between light and dark mode.
                            </p>
                        </li>

                    </ol>
                    <h3>The sidebar</h3>
                    <p>
                        Notes can quickly be accessed by clicking on the note's title in the sidebar.
                        After clicking, the note will appear in the <span>highlighted note view</span>.
                    </p>
                    <h3>Highlighted note view</h3>
                    <p>
                        After either creating a new note, or selecting a note from the sidebar, the note's content will be displayed in the highlighted note view.
                        The highlighted note view is the main interface for viewing, editing and deleting notes.
                        The buttons in the interface are provided with titles. So if the user hovers over them, a button's use will be displayed.
                    </p>
                    <hr />
                    <button class="textBtn" onClick={closeModal}>close</button>
                </Modal>
            </>
        );
    } else {
        return (
            <>
                <button class="anchorBtn" onClick={openModal}>How to use</button>
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
                    <h2>How to use</h2>
                    <h3>Navigation</h3>
                    <p>
                        The navigation bar contains 3 buttons which allow users to make use of notate's core functionalities:
                    </p>
                    <ol>
                        <li>
                            <h4><span style={{ fontWeight: "normal", fontSize: "1.4rem", marginLeft: ".5rem" }}><FiEdit /> New note</span></h4>
                            <p>
                                The first button in the navigation bar is the <span style={{ background: "var(--darkgray-light)" }}><FiEdit /> New note</span> button.
                                Upon clicking, the "New note" interface will be displayed. From here the user can enter a title and provide content for the note.
                                To save the note, the user can click the <span style={{ background: "var(--darkgray-light)" }}><FiSave /> Save note</span> button.
                            </p>
                        </li>
                        <li>
                            <h4><span style={{ fontWeight: "normal", fontSize: "1.4rem", marginLeft: ".5rem" }}><FiArchive /> Note overview</span></h4>
                            <p>
                                The second button in the navigation bar is the <span style={{ background: "var(--darkgray-light)" }}><FiArchive /> Note overview</span> button.
                                Upon clicking, an overview containing all notes will pop up. From here the user can quickly copy a note's content (including its Markdown syntax).
                                The user can also easily delete notes using the <span style={{ background: "var(--darkgray-light)" }}><FiTrash2 /> Bin</span> button.
                            </p>
                        </li>
                        <li>
                            <h4><span style={{ fontWeight: "normal", fontSize: "1.4rem", marginLeft: ".5rem" }}><FiSunrise /> Toggle light mode / <FiSunset /> Dark mode</span></h4>
                            <p>
                                The third button in the navigation bar is the <span style={{ background: "var(--darkgray-light)" }}><FiSunrise /> Toggle light mode / <FiSunset /> Dark mode</span> button.
                                Upon clicking, the color theme of the application will be toggled between light and dark mode.
                            </p>
                        </li>

                    </ol>
                    <h3>The sidebar</h3>
                    <p>
                        Notes can quickly be accessed by clicking on the note's title in the sidebar.
                        After clicking, the note will appear in the <span>highlighted note view</span>.
                    </p>
                    <h3>Highlighted note view</h3>
                    <p>
                        After either creating a new note, or selecting a note from the sidebar, the note's content will be displayed in the highlighted note view.
                        The highlighted note view is the main interface for viewing, editing and deleting notes.
                        The buttons in the interface are provided with titles. So if the user hovers over them, a button's use will be displayed.
                    </p>
                    <button class="textBtn" onClick={closeModal}>close</button>
                </Modal>
            </>
        );
    }
}

export default HowToUse;