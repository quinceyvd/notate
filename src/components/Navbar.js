import { FiEdit, FiArchive, FiSunrise, FiSunset } from "react-icons/fi";

function Navbar(props) {
    const toggleThemeIcon = () => {
        if (props.theme === '') {
            return <FiSunset />;
        } else {
            return <FiSunrise />;
        }
    }

    return (
        <nav>
            <a href="index.html">
                <h1 style={{fontSize: '1.5rem'}} className="logo">notate.</h1>
            </a>
            <div className="flexRow">
                <button title="New note" className="icoBtn" onClick={props.handleNewNoteToggle}><FiEdit /></button> {/* Call handleNewNoteToggle when the button is clicked */}
                <button title="Note overview" className="icoBtn" onClick={props.handleNotesToggle}><FiArchive /></button> {/* Call handleNotesToggle when the button is clicked */}
                <button title="Toggle light mode/dark mode" className="icoBtn" onClick={props.toggleTheme}>{toggleThemeIcon()}</button>
            </div>
        </nav>
    )
}

export default Navbar;
