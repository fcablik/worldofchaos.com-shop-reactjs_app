import { CartContext } from "../cartContext";
import { useContext } from "react";
import { useState } from 'react';
import Modal from './productDetailModal';

function ProductCard(props) {
    const product                   = props.product;
    const cart                      = useContext(CartContext);
        // console.log(cart.items);
        console.log(cart.getTotalCost());
    const productQuantity           = cart.getProductQuantity(product.id);
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className='product-item -text-center pixel-product-box'>
                <div className="product-item-main-info">
                    <div className='product-item-main-info-image'>
                        <img alt='' src={product.imgMain} />
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
                            {product.price}
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
