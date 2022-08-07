import React from 'react';

import Spline from '@splinetool/react-spline';

function Home() {
    return (
        <>
            <div className="content">
                <div className='hssvrs-welcome-block'>

                    <div className="wb-area -wb-title">
                        <h1 className='-wb-heading'>A modern-day<br/>web dvelopment</h1>
                        <p className='-wb-text'><sup>*</sup>Click or press the chosen key to continue</p>
                    </div>

                    <div className="wb-area -wb-3d">
                        <Spline scene="https://prod.spline.design/JViiQXwcB77HpiA4/scene.splinecode" />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;
