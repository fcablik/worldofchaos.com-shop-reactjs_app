import ImageCarousel from "./detail/carouselSlider";
import { t } from 'i18next';

const Modal = ({ open, onClose, product, cart, productQuantity }) => {

    let productPrice;
    let descriptionMain;
    let descriptionPoints;
    if (t('store.currency.code') === 'eur') {
        productPrice = t('store.currency.shortText') + ' ' + (product.price.eur);
        descriptionMain = (product.description_main.en);
        descriptionPoints = (product.description_points.en);
    } else {
        productPrice = (product.price.czk) + ' ' + t('store.currency.shortText');
        descriptionMain = (product.description_main.cs);
        descriptionPoints = (product.description_points.cs);
    }

    const slides = product.gallery.map((image) => {
        return {url: image};
    });

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
                        <p className='modal-content-header-close button-px-close bold capitalize' onClick={onClose}> {t('component.product.detail.close')} </p>
                    </div>

                    <div className='modal-content-body'>
                        <div id='product-detail' className='modal-content-body-product-detail'>
                            <div className='col-no-1 text-left modal-content-body-product-detail-description'>
                                <div className='woch-grey modal-content-body-product-detail-description-heading'>
                                    {t('component.product.detail.description')}
                                </div>

                                <div className='modal-content-body-product-detail-description-nametag'>
                                    <h4 className="modal-content-body-product-detail-description-nametag-title">
                                        {product.title}
                                    </h4>

                                    <div className="modal-content-body-product-detail-description-nametag-color">
                                        <span className="woch-grey">{t('component.product.detail.color')} </span>
                                        <span>{product.color}</span>
                                    </div>
                                </div>

                                <div className="modal-content-body-product-detail-description-about">
                                    <p>{descriptionMain}</p>
                                    {descriptionPoints.map((points) => (
                                        <li>{points}</li>
                                    ))}
                                </div>
                            </div>

                            <div className='col-no-2 modal-content-body-product-detail-image'>
                                <div id='product-gallery' className="modal-content-body-product-detail-image-gallery">
                                    <ImageCarousel slides={slides} />
                                </div>
                            </div>      

                            <div className='col-no-3 text-left modal-content-body-product-detail-variant'>
                                <div className='woch-grey modal-content-body-product-detail-variant-heading'>
                                    {t('component.product.detail.variant')}
                                </div>

                                <div>
                                    {product.variants.map((variant) => (
                                        <div>{variant.name}</div>
                                    ))}
                                </div>

                                <div>
                                    {productPrice}
                                </div>
                                <div>
                                    {
                                        productQuantity > 0 ?
                                        <>
                                            <div className='cart-info'>{t('component.product.detail.cart')} {productQuantity}</div>

                                            <div className='cart-amount'>
                                                {
                                                    (productQuantity <= product.stock - 1) ?
                                                        <div className='add' onClick={() =>  cart.addOneToCart(product.id)}> {t('component.product.quantity.add.symbol')} </div>
                                                    :
                                                        <div className='add'> {t('component.product.quantity.limit')} </div>
                                                }

                                                {
                                                    productQuantity === 1 ?
                                                        <div className='remove'> {t('component.product.quantity.remove.symbol')} </div>
                                                    :
                                                        <div className='remove' onClick={() =>  cart.removeOneFromCart(product.id)}> {t('component.product.quantity.remove.symbol')} </div>    
                                                }
                                            </div>

                                            <div 
                                                className='delete' 
                                                onClick={() => cart.deleteFromCart(product.id)}
                                            >
                                                {t('component.product.quantity.remove.cart')}
                                            </div>

                                        </>
                                        :
                                        <button 
                                            className='pixel-borders button-px-highlight bold capitalize'
                                            onClick={() => cart.addOneToCart(product.id)}
                                        >
                                             {t('component.product.quantity.add.cart')}
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;