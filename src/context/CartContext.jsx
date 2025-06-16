import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import { initialState, cartReducer } from "../reducers/CartReducer";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      console.log("cart", cart);
      
      dispatch({ type: "SET_CART", payload: cart });
    }
  }, []);
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
