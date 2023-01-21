import { getProductData } from "../product/productsConfig";
import { createContext, useEffect, useState } from "react";

// define a name constant to avoid typos
const CART = "cart";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function recoverCart() {
    // if window is not intialized yet, function returns
    // undefined and the cartProducts state remains an empty array
    if (typeof window === "undefined") {
      return;
    }

    const existingCart = window.localStorage.getItem(CART);

    // if there is no cart saved, the function returns undefined
    if (!existingCart) {
      return;
    }

    // if we found an saved cart state in localstorage
    // the function will change the state
    // and return 1 as a success flag
    const parsedCart = JSON.parse(existingCart);
    setCartProducts(parsedCart);
    return 1;
  }

  // I made a function which update ur current state and
  // the local storage value
  function updateCart(newCartArray) {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(CART, JSON.stringify(newCartArray));
    setCartProducts(newCartArray);
  }

  function getProductQuantity(id) {
    const quantity = cartProducts.find((product) => product.id === id)
      ?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      updateCart([
        ...cartProducts,
        {
          id: id,
          quantity: 1
        }
      ]);
    } else {
      // made the operation first
      const changedCartData = cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      // then save it
      updateCart(changedCartData);
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);

      // exit the function earlier and the code is more lisible
      return;
    }

    // made the operation first
    const changedCartData = cartProducts.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity - 1
        };
      }

      return product;
    });

    // then update
    updateCart(changedCartData);
  }

  function deleteFromCart(id) {
    // made the operation first
    const filteredCartArray = cartProducts.filter(
      (currentProduct) => currentProduct.id !== id
    );

    // then update
    updateCart(filteredCartArray);
  }

  function getTotalCost() {
    // map iterates over a value and returns an array
    // I recommend to use forEach or reduce
    // cartProducts.map((cartItem) => {
    //   const productData = getProductData(cartItem.id);
    //   totalCost += productData.price * cartItem.quantity;
    // });

    // an example for reduce function
    const totalCost = cartProducts.reduce((total, cartItem) => {
      const productData = getProductData(cartItem.id);

      // in case product id does not exists
      if (!productData) {
        return total;
      }

      return total + productData.price * cartItem.quantity;
    }, 0);
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  };

  useEffect(() => {
    recoverCart();
  }, []);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
