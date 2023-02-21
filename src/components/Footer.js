import { useEffect, useState} from 'react';
import { NavLink, useLocation } from "react-router-dom";

import TikTokSvg from '../components/svg/TikTok';
import InstagramSvg from '../components/svg/Instagram';
import YouTubeSvg from '../components/svg/YouTube';
import MailSvg from '../components/svg/Mail';


function Footer() {

        const [isVisible, setIsVisible] = useState(false);
        const handleClick = event => {
            setIsVisible(current => !current);
        };

        const location  = useLocation();

        function changeClass(){
            const nav = document.getElementById('navigation');
            if (nav.classList.contains('open')) {
                handleClick();
            }
        }
        useEffect(() => {
            changeClass();
        }, [location]);


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
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@wochlife/" className='-f-icon'>
                            <YouTubeSvg />
                        </a>
                        <a target="_blank" rel="noreferrer" href="mailto:info@wochlife.com" className='-f-icon'>
                            <MailSvg />
                        </a>
                    </div>

                    <div className={isVisible ? '-ic-after menu-active' : '-ic-after menu-inactive'}>
                        The Store is closed ATM.
                    </div>
                </div>

                <div className='menu-icon' onClick = {handleClick}>
                    <div className={isVisible ? 'menu-opener active' : 'menu-opener inactive'}>
                        <span className='line'></span>
                        <span className='line'></span>
                        <span className='line'></span>
                    </div>
                </div>

                <nav id='navigation' className={isVisible ? 'navigation open' : 'navigation close'}>
                    <div className="menu-block">
                        <div className='web-links'>
                            <NavLink activeclassname='active' to="/shop" className='-mb-text'>
                                <span>Shop</span>
                            </NavLink>
                            <NavLink activeclassname='active' to="/contact" className='-mb-text'>
                                <span>Contact</span>
                            </NavLink>
                            <NavLink activeclassname='active' to="/subscription" className='-mb-text'>
                                <span>Stay In Touch</span>
                            </NavLink>
                            <NavLink activeclassname='active' to="/sustainability" className='-mb-text'>
                                <span>Sustainability</span>
                            </NavLink>
                            <a href='/' className='-mb-text disabled'>
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
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@wochlife/" className='-f-icon'>
                                <YouTubeSvg />
                            </a>
                            <a target="_blank" rel="noreferrer" href="mailto:info@wochlife.com" className='-f-icon'>
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
