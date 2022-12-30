import React from 'react';
import ProductCategory from '../productCategory';

export default function Shop() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>
                    <div id='shop'>
                        <h1 className="-mc-title -text-center">
                            welcome to the
                                <br className='xs-mob'/>
                                <span className='xs-none'>&nbsp;</span>
                            woch store
                        </h1>

                        <div className='-mc-shop'>
                            <ProductCategory />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
