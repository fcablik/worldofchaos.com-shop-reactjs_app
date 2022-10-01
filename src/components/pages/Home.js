import React from 'react';
import { Link } from 'react-router-dom';

import wochLogoDark from '../../img/logo-woch_full-dark.svg';
// import shopTitle from '../../img/shop_text-grey.svg';

function Home() {
    return (
        <>
            <div className='welcome-container'>

                <div className='center-block'>
                    <img class='logo-full' src={wochLogoDark} alt='world of chaos' />
                </div>
                <div className='info-block'>
                    <h4>
                        <span>There’s nothing here at the moment, but you can</span>
                        <Link to="/contact" className='-mb-text'>
                            <span> </span>contact us
                        </Link>.
                    </h4>
                </div>

                {/* <div className='block-sub-title'>
                    <img class='shop-title' src={shopTitle} alt='shop woch' height='50' />
                </div> */}

            </div>
        </>
    );
}

export default Home;
