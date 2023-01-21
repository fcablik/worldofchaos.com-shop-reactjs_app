import { CartContext } from "../cart/cartContext";
import { useContext } from "react";
import { useState } from 'react';
import Modal from './productDetailModal';
import { t } from 'i18next';

function ProductCard(props) {
    const product                   = props.product;
    const cart                      = useContext(CartContext);
        // console.log(cart.items);
    const productQuantity           = cart.getProductQuantity(product.id);
    const [openModal, setOpenModal] = useState(false);

    let productPrice;
    if (t('store.currency.code') === 'czk') {
        productPrice = (product.price.czk) + ' ' + t('store.currency.shortText');
    } else {
        productPrice = t('store.currency.shortText') + ' ' + (product.price.eur);
    }

    return (
        <>
            <div className='product-item text-center pixel-product-box'>
                <div className="product-item-main-info">
                    <div className='product-item-main-info-image'>
                        <img alt='' src={product.imagePreview} />
                    </div>

                    <div className='product-item-main-info-title'>
                        <div className="product-item-main-info-title-name uppercase">
                            {product.title}
                        </div>

                        <div className='product-item-main-info-title-color'>
                            {product.color}
                        </div>
                    </div>

                    <div className='product-item-main-info-price'>
                        <span className='highlight'>
                            {productPrice}
                        </span>
                    </div>
                </div>

                <button 
                    onClick     = {() => setOpenModal(true)} 
                    className   = 'pixel-borders button-px-highlight bold capitalize'
                >
                    detail
                </button>
            </div>

            <Modal 
                open            = {openModal} 
                onClose         = {() => setOpenModal(false)}
                product         = {product}
                cart            = {cart}
                productQuantity = {productQuantity}
            />
        </>
    )
}

export default ProductCard;
