import React from 'react';
import SubscriptionForm from '../SubcriptionForm';

export default function Subscription() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>

                    <div id='subscription'>
                        <h1 className="-mc-title -text-center -highlight">Subscribe to stay in touch!</h1>

                        <div className='-mc-text-area'>
                            <div className='section'>
                                <SubscriptionForm />
                            </div>
                            
                                <br/>

                            <div className='section -text-center'>
                                <p>Sign in to make sure you don't miss<br/>any important updates or drops. :-)</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </main>
        </>
    );
}
