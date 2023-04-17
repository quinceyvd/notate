import React from 'react';
import HowToUse from './modals/HowToUse';
import About from './modals/About';

function Footer() {
    return (
        <footer>
            <div className="flexColumn">
                <h3 className="logo">notate.</h3>
            </div>
            <div className="flexColumn">
                <code>
                    <HowToUse />
                    <br />
                    <About />
                </code>
            </div>
        </footer>
    )
}

export default Footer;