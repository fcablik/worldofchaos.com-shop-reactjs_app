import { useContext } from 'react';
import { CartContext } from "../../cartContext";
import CartProduct from '../CartProduct';
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
                                        <p>items in your cart:</p>
                                        {cart.items.map((currentProduct, idx) => (
                                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                                        ))}

                                        <h1>Total: {cart.getTotalCost()} {currencyShortText}</h1>

                                        <button variant='success'>
                                            go to checkout
                                        </button>
                                    </>
                                :
                                    <h1>no items</h1>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
