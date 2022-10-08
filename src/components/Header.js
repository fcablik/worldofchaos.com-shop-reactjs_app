import React from 'react';
import { NavLink } from 'react-router-dom';
import wochLogo from '../img/logo-woch_full-grey.svg';

function Header() {
    return (
        <>
            <nav className='header' id='header'>
                <div className='column'>
                    <NavLink activeClassName='active' to='/' className='-hdr-logo'>
                        <img class='logo-full' src={wochLogo} alt='world of chaos' height='50' />
                    </NavLink>
                </div>
                <div className='column'>
                    <div>
                        <span>CART </span>
                        <span>0</span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
