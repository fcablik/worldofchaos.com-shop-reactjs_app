import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = event => {
        setIsVisible(current => !current);
    };

    return (
        <>
            <div className='footer' id='footer'>
                <div className='icons column'>
                    <p>socials</p>
                </div>
                <div className='menu column'>
                    <div onClick = {handleClick}>
                        <div className={isVisible ? 'menu-opener is-active' : 'menu-opener is-inactive'}>
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
                <nav id='navigation' className={isVisible ? 'navigation open' : 'navigation close'}
                    // style={{visibility: isVisible ? 'visible' : 'hidden', animation: isVisible ? 'h' : 'h'}}
                >
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
            </div>
        </>
    );
}

export default Footer;
