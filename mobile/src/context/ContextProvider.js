import { useEffect, useState } from 'react';
import Context from './appContext';
import { addToCart, getCart, deleteCart, } from '../firebase/services'

const ContextProvider = (props) => {
  const initialCartState = {
    items: [],
    totalPrice: 0,
    totalQty: 0,
  };
  const [cart, setCart] = useState(initialCartState);

  useEffect(() => {
    async function loadCart() {
      const savedCart = await getCart();
      const { totalPrice, totalQty } = calculateCartTotals(savedCart);
      setCart({ items: savedCart, totalPrice, totalQty });
    }
    loadCart();
  }, []);

  function calculateCartTotals(cartItems) {
    const totalPrice = Number(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)) || 0;
    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0) || 0;
    return { totalPrice, totalQty }
  }

  function handleAddToCart(product) {
    const currentCart = { ...cart };
    console.log(currentCart);
    const productIndex = currentCart.items.findIndex((item) => item.description === product.description);

    let productToAdd = {};
    if (productIndex !== -1) {
      currentCart.items[productIndex].qty += 1;
      productToAdd = currentCart.items[productIndex];
    } else {
      currentCart.items.push({...product, qty: 1});
      productToAdd = currentCart.items[currentCart.items.length - 1];
    }

    const { totalPrice, totalQty } = calculateCartTotals(currentCart.items);
    setCart({ ...currentCart, totalPrice, totalQty });

    addToCart(productToAdd);
  }

  function resetCart() {
    setCart(initialCartState);
    deleteCart();
  }

  const contextValue = {
    cart,
    handleAddToCart,
    resetCart,
  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;