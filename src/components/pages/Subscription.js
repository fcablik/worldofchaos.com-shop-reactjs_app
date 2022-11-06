import React from 'react';
import SubscriptionForm from '../subcriptionForm';

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

                            <div className='section -text-center'>
                                <p>Subscribe to make sure you do not miss<br/>any important updates or drops. :-)</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </main>
        </>
    );
}
