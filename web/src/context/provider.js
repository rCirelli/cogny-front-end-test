import React from 'react';
import PropTypes from 'prop-types';
import Context from './index';
import useLocalStorage from '../hooks/useLocalStorage';

function Provider({ children }) {
  const initialCartState = { items: [], totalPrice: 0, totalQty: 0 }
  const [localCart, setLocalCart] = useLocalStorage('cart', initialCartState);

  function calculateCartTotals(cartItems) {
    const totalPrice = Number(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2));
    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
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
  }

  function resetCart() {
    setLocalCart(initialCartState);
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

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;