import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
        <nav className='footer'>
            <Link to="/" className='-ftr-text'>
                Get Your first consultation for Free!
            </Link>
        </nav>
    </>
  );
}

export default Footer;
