import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <div className="hssvrs-category-choice">
                <div className="-cc-choice">
                    <Link to="/about" className='-cc-text'>
                        <sup>00</sup>About HussleVerse
                    </Link>
                    <Link to="/contact" className='-cc-text'>
                        <sup>01</sup>Contacts
                    </Link>
                    <Link to="/skill-set" className='-cc-text'>
                        <sup>02</sup>Skills, Experience
                    </Link>
                    <Link to="/full-experience" className='-cc-text'>
                        <sup>START</sup>For the Full Experience
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navigation;
