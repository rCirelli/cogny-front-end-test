import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './index';
import useLocalStorage from '../hooks/useLocalStorage';

function Provider({ children }) {
  const [localCart, setLocalCart] = useLocalStorage('cart', []);
  const [cartTotal, setCartTotal] = useLocalStorage('total', 0);

  function handleAddToCart(product) {
    const currentCart = localCart;
    const productIndex = currentCart.findIndex((item) => item.description === product.description);
    if (productIndex !== -1) {
      const newCart = structuredClone(localCart);
      newCart[productIndex].qty += 1;
      setLocalCart(newCart);
    } else {
      const newCart = structuredClone(currentCart);
      newCart.push({...product, qty: 1});
      setLocalCart(newCart);
    }
  }

  useEffect(() => {
    function calculateCartTotal() {
      const total = localCart.reduce((acc, item) => acc + item.price * item.qty, 0);
      setCartTotal(total)
    }
    if (localCart.length > 0) {
      calculateCartTotal(); 
    }
  }, [localCart, setCartTotal]);

  const contextValue = {
    localCart, setLocalCart,
    cartTotal, setCartTotal,
    handleAddToCart,
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