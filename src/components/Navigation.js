import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            {/* this block will be displayed on hover of menu btn in footer */}
            <div className="menu-block">
                <div className="-cc-choice">
                    <Link to="/shop" className='-mb-text'>
                        Shop
                    </Link>
                    <Link to="/contact" className='-mb-text'>
                        Contact
                    </Link>
                    <Link to="/sustainability" className='-mb-text'>
                        Sustainability
                    </Link>
                    <Link to="/terms-conditions" className='-mb-text'>
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navigation;
