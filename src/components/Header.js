import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function header() {

  return (
    <>
        <nav className='header'>
            <Link to='/' className='header-logo'>
              <img src='/hussleverse_logo_large.png' alt='' height='18'/>
            </Link>
        </nav>
    </>
  );
}

export default header;
