import React from 'react';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';

import TikTokSvg from '../components/svg/TikTok';
import InstagramSvg from '../components/svg/Instagram';
import YouTubeSvg from '../components/svg/YouTube';
import MailSvg from '../components/svg/Mail';

function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = event => {
        setIsVisible(current => !current);
    };
    

    return (
        <>
            <div className='footer' id='footer'>

                <div className='icons'>
                    <div className={isVisible ? '-ic menu-active' : '-ic menu-inactive'}>
                        <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@wochlife" className='-f-icon'>
                            <TikTokSvg />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/wochlife/" className='-f-icon'>
                            <InstagramSvg />
                        </a>
                        <a target="_blank" rel="noreferrer" className='-f-icon disabled'>
                            <YouTubeSvg />
                        </a>
                        <a target="_blank" rel="noreferrer" href="mailto:info@theworldofchaos.com" className='-f-icon'>
                            <MailSvg />
                        </a>
                    </div>

                    <div className={isVisible ? '-ic-after menu-active' : '-ic-after menu-inactive'}>
                        The Store is closed ATM.
                    </div>
                </div>

                <div className='menu-icon' onClick = {handleClick}>
                    <div className={isVisible ? 'menu-opener active' : 'menu-opener inactive'}>
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>
                </div>

                <nav id='navigation' className={isVisible ? 'navigation open' : 'navigation close'}>
                    <div className="menu-block">
                        <div className='web-links'>
                            <a to="#" className='-mb-text disabled'>
                                <span>Shop</span>
                                <small>closed atm.</small>
                            </a>
                            <NavLink activeClassName='active' to="/contact" className='-mb-text'>
                                <span>Contact</span>
                            </NavLink>
                            <a to="#" className='-mb-text disabled'>
                                <span>Sustainability</span>
                                <small>closed atm.</small>
                            </a>
                            <a to="#" className='-mb-text disabled'>
                                <span>Terms & Conditions</span>
                                <small>closed atm.</small>
                            </a>
                        </div>

                        <div className='social-links'>
                            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@wochlife" className='-f-icon'>
                                <TikTokSvg />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/wochlife/" className='-f-icon'>
                                <InstagramSvg />
                            </a>
                            <a target="_blank" rel="noreferrer" className='-f-icon disabled'>
                                <YouTubeSvg />
                            </a>
                            <a target="_blank" rel="noreferrer" href="mailto:info@theworldofchaos.com" className='-f-icon'>
                                <MailSvg />
                            </a>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    );
}

export default Footer;
