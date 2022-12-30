import React from 'react';

import testImage from '../img/test_tpl-hoodie.png';
import testImage2 from '../img/test_tpl-shoe.png';

export default function ProductCategory() {
    return (
        <>
            <div
                id='product-category'
                class='product-category-content'
                data-load='yes'
                data-content='products'
            >


                {/* foreach products --> */}  
                    <div href='{$product}' class='product-item -text-center'>
                        <div className='product-item-image'>
                            <img src={testImage2} />
                        </div>

                        <div className='product-item-title'>
                            <h5>Nike Dunk High 1985</h5>
                        </div>

                        <div className='product-item-color'>
                            <h5>black/white</h5>
                        </div>

                        <div className='product-item-price'>
                            <span className='highlight'>$229.99</span>
                        </div>
                    </div>
                {/* /foeach products end */}

            </div>
        </>
    );
}
