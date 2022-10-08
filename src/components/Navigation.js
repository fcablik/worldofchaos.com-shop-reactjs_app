import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <div id='navigation' className='navigation'>
                <div className="menu-block">
                    <NavLink activeClassName='active' to="/shop" className='-mb-text'>
                        Shop
                    </NavLink>
                    <NavLink activeClassName='active' to="/contact" className='-mb-text'>
                        Contact
                    </NavLink>
                    <NavLink activeClassName='active' to="/sustainability" className='-mb-text'>
                        Sustainability
                    </NavLink>
                    <NavLink activeClassName='active' to="/terms-conditions" className='-mb-text'>
                        Terms & Conditions
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navigation;
