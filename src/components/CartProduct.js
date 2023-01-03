import { CartContext } from "../cartContext";
import { useContext } from "react";
import { getProductData } from "../productsConfig";
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
            <p>{(quantity * productPrice)} {currencyShortText}</p>
            <button
                onClick={() => cart.deleteFromCart(id)}
            >
                remove
            </button>
            <hr />
        </>
    )

}
