import React from 'react';

export default function Contact() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>

                    <div id='contact'>
                        <h1 className="-mc-title -text-center">Contact</h1>

                        <div className='-mc-text-area'>
                            <div className='section'>
                                <h6 className='-text-center'>World Of Chaos is about responsibility.<br/>Give our shoes a new life.</h6>
                            </div>

                                <br/><br/>

                            <div className='section'>
                                <p>If you find yourself having any problems, <span className='highlight'>contact me</span> on:</p>

                                <ul className='highlight-bullets'>
                                    <li>
                                        Mail:&nbsp;
                                        <a className='highlight' href='mailto:phil@theworldofchaos.com'>phil@theworldofchaos.com</a>
                                    </li>
                                    <li>
                                        TikTok:&nbsp;
                                        <a target='_blank' rel='noreferrer' className='highlight' href='https://tiktok.com/@wochlife'>@wochlife</a>
                                    </li>
                                    <li>
                                        Instagram:&nbsp;
                                        <a target='_blank' rel='noreferrer' className="highlight" href='https://instagram.com/wochlife'>@wochlife</a>
                                    </li>
                                </ul>
                            </div>

                                <br/>

                            <div className='section'>
                                <p className='highlight'>Global Information:</p>

                                <ul className='highlight-bullets'>
                                    <li>World Of Chaos</li>
                                    <li>CZ Business Reg. No.: 17460913</li>
                                    <li>IBAN: LT023250086995759630</li>
                                    <li>
                                        Operated by:&nbsp;
                                        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/husslephil/'>@husslephil</a>
                                    </li>
                                    <li>
                                        Mail:&nbsp;
                                        <a className='highlight' href='mailto:phil@theworldofchaos.com'>phil@theworldofchaos.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
