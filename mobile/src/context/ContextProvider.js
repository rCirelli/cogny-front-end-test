import { useState } from 'react';
import Context from './app-context';

const ContextProvider = (props) => {
  const initialCartState = {
    items: [],
    totalPrice: 0,
    totalQty: 0,
  };
  const [cartState, setCartState] = useState(initialCartState);

  return (
    <Context.Provider value={{ cart: cartState }}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;