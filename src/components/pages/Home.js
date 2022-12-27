import React from 'react';
import { NavLink } from 'react-router-dom';

import wochEarth from '../../img/woch_earth.svg';
// import shopTitle from '../../img/shop_text-grey.svg';

export default function Home() {
    return (
        <>
            <div className='welcome-container'>
                <div className='-wc-center-block'>
                    <img className='logo-full' src={wochEarth} alt='world of chaos' />
                </div>

                <div className='-wc-info-block -text-center'>
                    <h4>
                        <span>The Store is closed<br/>at the moment, but you can still</span>
                        <NavLink activeclassname='active' to="/contact" className='-wc-info-text highlight'>
                            &nbsp;contact us
                        </NavLink>.
                    </h4>
                </div>

                {/* <div className='block-sub-title'>
                    <img className='shop-title' src={shopTitle} alt='shop woch' height='50' />
                </div> */}
            </div>
        </>
    );
}
