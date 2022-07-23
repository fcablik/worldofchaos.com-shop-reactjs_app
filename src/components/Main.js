import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import './Main.css';
import Spline from '@splinetool/react-spline';

function Main() {
    return (
        <>
            <main id='main'>
                <div className='container'>
                    <div className="content">

                        <div className='hssvrs-welcome-block'>
                            <div className="wb-area-text">
                                <h1 className='-wb-heading'>A modern-day<br/>web development</h1>
                                <p className='-wb-text'><sup>*</sup>Choose & press key to continue</p>
                            </div>
                            <div className="wb-area-spline">
                                <Spline scene="https://prod.spline.design/JViiQXwcB77HpiA4/scene.splinecode" />
                            </div>

                        </div>

                        <div className="hssvrs-category-choice">
                            <Link to="/about" className='-cc-text'>
                                <sup>00</sup>About HussleVerse
                            </Link>
                            <Link to="/contact" className='-cc-text'>
                                <sup>01</sup>Contacts
                            </Link>
                            <Link to="/skill-set" className='-cc-text'>
                                <sup>02</sup>Skills, Experience
                            </Link>
                            <Link to="/full-experience" className='-cc-text'>
                                <sup>START</sup>For the Full Experience
                            </Link>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;
