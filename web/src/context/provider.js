import React, { useEffect, useMemo } from 'react';
import Context from './index';
import useLocalStorage from '../hooks/useLocalStorage';
import { addToCart, deleteCart, getCart } from "../firebase/SDK.js";

function Provider({ children }) {
  const initialCartState = useMemo(() => ({ items: [], totalPrice: 0, totalQty: 0 }), []);
  const [localCart, setLocalCart] = useLocalStorage('cart', initialCartState);

  useEffect(() => {
    async function loadCart() {
      const savedCart = await getCart();
      const { totalPrice, totalQty } = calculateCartTotals(savedCart);
      setLocalCart({ items: savedCart, totalPrice, totalQty });
    }
    loadCart();
  }, []);

  function calculateCartTotals(cartItems) {
    const totalPrice = Number(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)) || 0;
    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0) || 0;
    return { totalPrice, totalQty }
  }

  function handleAddToCart(product) {
    const currentCart = structuredClone(localCart);
    const productIndex = currentCart.items.findIndex((item) => item.description === product.description);

    if (productIndex !== -1) {
      currentCart.items[productIndex].qty += 1;
    } else {
      currentCart.items.push({...product, qty: 1});
    }

    const { totalPrice, totalQty } = calculateCartTotals(currentCart.items);
    setLocalCart({ ...currentCart, totalPrice, totalQty });

    const addedProduct = currentCart.items.at(productIndex);
    addToCart(addedProduct);
  }

  function resetCart() {
    setLocalCart(initialCartState);
    deleteCart();
  }

  const contextValue = {
    localCart, setLocalCart,
    handleAddToCart,
    resetCart,
  }

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;