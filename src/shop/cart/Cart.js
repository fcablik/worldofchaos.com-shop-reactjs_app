import { useContext } from 'react';
import { CartContext } from "./cartContext";
import CartProduct from './cartProduct';
import { NavLink } from 'react-router-dom';
import { t } from 'i18next';

export default function Cart() {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    let currencyShortText;
    if (t('store.currency.code') === 'czk') {
        currencyShortText = t('store.currency.shortText');
    } else {
        currencyShortText = t('store.currency.shortText');
    }

    return (
        <>
            <main id='main'>
                <div className='main-content'>
                    <div id='shop'>
                        <div className='-mc-global'>
                            {
                                productsCount > 0 ?
                                    <>
                                        <p>{t('component.cart.items.info')}</p>
                                        {cart.items.map((currentProduct, idx) => (
                                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                                        ))}

                                        <h1>{t('component.cart.total')} {cart.getTotalCost()} {currencyShortText}</h1>

                                        <button variant='success'>
                                            {t('component.cart.checkout')}
                                        </button>
                                    </>
                                :
                                <>
                                    <div className='text-center'>
                                        <h1>{t('component.cart.items.empty')}</h1>
                                        <NavLink className="btn-back-to-shop" to="/shop">{t('component.cart.backtoshop')}</NavLink>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
