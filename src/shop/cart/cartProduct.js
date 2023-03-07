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
                        <div className='add' onClick={() =>  cart.addOneToCart(id)}> {t('component.product.quantity.add.symbol')} </div>
                    :
                        <div className='add'> {t('component.product.quantity.limit')} </div>
                }
                {
                    quantity === 1 ?
                        <div className='remove'> {t('component.product.quantity.remove.symbol')} </div>
                    :
                        <div className='remove' onClick={() =>  cart.removeOneFromCart(id)}> {t('component.product.quantity.remove.symbol')} </div>    
                }
            </div>

            <button onClick={() => cart.deleteFromCart(id)}>
                {t('component.product.quantity.remove.text')}
            </button>

            <hr />
        </>
    )

}
