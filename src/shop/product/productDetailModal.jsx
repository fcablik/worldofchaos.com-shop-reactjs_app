import { t } from 'i18next';

const Modal = ({ open, onClose, product, cart, productQuantity }) => {

    let productPrice;
    if (t('store.currency.code') === 'czk') {
        productPrice = (product.price.czk) + ' ' + t('store.currency.shortText');
    } else {
        productPrice = t('store.currency.shortText') + ' ' + (product.price.eur);
    }

    if (!open) return null;
    return (
        <div onClick={onClose} className='modal'>
            <div 
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className='modal-container pixel-component-box'
            >
                <div className='modal-content'>
                    <div className='modal-content-header'>
                        <p className='modal-content-header-close button-px-close bold capitalize' onClick={onClose}> close </p>
                    </div>

                    <div className='modal-content-body'>
                        <div id='product-detail' className='modal-content-body-product-detail'>
                            <div className='col-no-1 text-left modal-content-body-product-detail-description'>
                                <div className='modal-content-body-product-detail-description-title'>Description</div>
                                {product.title}<br/>
                                {product.color}<br/>
                            </div>

                            <div className='col-no-2 modal-content-body-product-detail-image'>
                                <div id='product-gallery' className="modal-content-body-product-detail-image-gallery">
                                    {product.gallery.map((image) => {
                                        return(
                                            <img width='200' alt='' src={image} />
                                        );
                                    })}
                                </div>
                            </div>      

                            <div className='col-no-3 text-left modal-content-body-product-detail-variant'>
                                {productPrice}
                                {
                                    productQuantity > 0 ?
                                    <>
                                        <div className='cart-info'>In Cart: {productQuantity}</div>

                                        <div className='cart-amount'>
                                            {
                                                (productQuantity <= product.stock - 1) ?
                                                    <div className='add' onClick={() =>  cart.addOneToCart(product.id)}> + </div>
                                                :
                                                    <div className='add'> + </div>
                                            }

                                            {
                                                productQuantity === 1 ?
                                                    <div className='remove'> - </div>
                                                :
                                                    <div className='remove' onClick={() =>  cart.removeOneFromCart(product.id)}> - </div>    
                                            }
                                        </div>

                                        <div 
                                            className='delete' 
                                            onClick={() => cart.deleteFromCart(product.id)}
                                        >
                                            Remove From Cart
                                        </div>

                                    </>
                                    :
                                    <button 
                                        className='pixel-borders button-px-highlight bold capitalize'
                                        onClick={() => cart.addOneToCart(product.id)}
                                    >
                                        add to cart
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;