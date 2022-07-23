import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
        <nav className='footer'>
            <Link to='/' className='footer-logo'>
              <img src='/hussleverse_logo_large.png' alt='' height='18'/>
            </Link>
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
        </nav>
    </>
  );
}

export default Footer;
