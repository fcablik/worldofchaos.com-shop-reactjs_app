import { CartContext } from "../cartContext";
import { useContext } from "react";
import { getProductData } from "../productsConfig";

export default function CartProduct(props) {

    const cart          = useContext(CartContext);
    const id            = props.id;
    const quantity      = props.quantity;
    const productData   = getProductData(id);

    return (
        <>
            <p>{productData.title}</p>
            <p>{quantity}</p>
            <p>{(quantity * productData.price).toFixed(2)}</p>
            <button
                onClick={() => cart.deleteFromCart(id)}
            >
                remove
            </button>
            <hr />
        </>
    )

}
