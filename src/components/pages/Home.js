import React from 'react';
import '../../App.css';
import Navigation from './../Navigation';
import Spline from '@splinetool/react-spline';

function Home() {
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

                        <Navigation />

                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Home;
