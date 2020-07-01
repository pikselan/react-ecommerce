import React, { createContext, useReducer } from "react";

const initialState = {
  cart: 0,
  color: "",
  priceItem: 209,
  priceTotal: 0,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "upCart":
        return {
          ...state,
          ...action.payload,
          cart: state.cart + 1,
        };
      case "downCart":
        if (state.cart === 0) {
          return {
            ...state,
            ...action.payload,
            cart: 0,
          };
        }
        return {
          ...state,
          ...action.payload,
          cart: state.cart - 1,
        };
      case "chooseColor":
        return {
          ...state,
          ...action.payload,
        };
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
