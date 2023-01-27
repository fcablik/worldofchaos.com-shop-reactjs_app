import { CartContext } from "./cartContext";
import { useContext } from "react";
import { getProductData } from "../product/productsConfig";
import { t } from 'i18next';

export default function CartProduct(props) {

    const cart          = useContext(CartContext);
    const id            = props.id;
    const quantity      = props.quantity;
    const productData   = getProductData(id);

    let productPrice;
    let currencyShortText;
    if (t('store.currency.code') === 'czk') {
        productPrice = (productData.price.czk);
        currencyShortText = t('store.currency.shortText');
    } else {
        productPrice = (productData.price.eur);
        currencyShortText = t('store.currency.shortText');
    }

    return (
        <>
            <p>{productData.title}</p>
            <p>{quantity}</p>
            <p>{(quantity * productPrice)}&nbsp;{currencyShortText}</p>

            <div>
                {
                    (quantity <= productData.stock - 1) ?
                        <div className='add' onClick={() =>  cart.addOneToCart(id)}> + </div>
                    :
                        <div className='add'> cant add more </div>
                }
                {
                    quantity === 1 ?
                        <div className='remove'> - </div>
                    :
                        <div className='remove' onClick={() =>  cart.removeOneFromCart(id)}> - </div>    
                }
            </div>

            <button
                onClick={() => cart.deleteFromCart(id)}
            >
                remove
            </button>

            <hr />
        </>
    )

}
