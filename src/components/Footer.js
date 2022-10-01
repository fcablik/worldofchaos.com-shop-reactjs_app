import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';




function Footer() {

    const [isVisible, setIsVisible] = useState(true);
    const handleClick = event => {
        setIsVisible(current => !current);
    };
    


    return (
        <>
            <nav id='navigation' className={isVisible ? "navigation open" : "navigation close"}>
                <div className="menu-block">
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
            </nav>

            <div className='footer' id='footer'>
                <div className='column'>
                    <p>socials</p>
                </div>
                <div className='column'>
                    <a onClick = {handleClick}>menu</a>
                </div>
            </div>
        </>
    );
}

export default Footer;
