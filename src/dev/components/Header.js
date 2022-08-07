import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <nav className='header'>
                <Link to='/' className='-hdr-logo'>
                    <img src='/hussleverse_logo_large.png' alt='' height='18'/>
                </Link> 
            </nav>
        </>
    );
}

export default Header;
