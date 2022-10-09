import React from 'react';

export default function Contact() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>

                    <div id='contact'>
                        <h1 className="main-title">Contact</h1>
                        <div className='-mc-text-area'>

                            <div className='section'>
                                <h6>"Streetwear is what brought us into the fashion, <br className='visible-small'/>but its cultural impact is what makes it worth creating."</h6>
                            </div>

                                <br/><br/>

                            <div className='section'>
                                <p>If you find yourself having any problems, <span className='highlight'>contact us</span> on:</p>
                                <ul className='highlight-bullets'>
                                    <li><a className='highlight' href='mailto:help@theworldofchaos.com'>help@theworldofchaos.com</a></li>
                                    <li><p>Socials:</p>&nbsp;<a target='_blank' rel='noreferrer' href='https://www.instagram.com/wochlife'>@wochlife</a></li>
                                </ul>
                            </div>

                                <br/>

                            <div className='section'>
                                <p>For further information or collaborations, <span className='highlight'>contact us</span> on:</p>
                                <ul className='highlight-bullets'>
                                    <li><a class="highlight" href='mailto:hello@theworldofchaos.com'>hello@theworldofchaos.com</a></li>
                                    <li>Mob: +420 732 581 264</li>
                                    <li>The contactee: Filip Cablik, CEO</li>
                                </ul>
                            </div>

                                <br/>

                            <div className='section'>
                                <p className='highlight'>Global Information:</p>
                                <ul className='highlight-bullets'>
                                    <li>World Of Chaos</li>
                                    <li>VAT: ########</li>
                                    <li>IBAN: CZ################</li>
                                    <li>Operated by:<a href='https://www.instagram.com/filipcablik'>&nbsp;@filipcablik</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
