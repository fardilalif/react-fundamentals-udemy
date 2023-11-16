import { createContext, useContext, useEffect, useReducer } from "react";
import {
  CLEAR_CART,
  DECREASE,
  DISPLAY_ITEM,
  INCREASE,
  LOADING,
  REMOVE,
} from "./actions.js";
import cartItems from "./data";
import reducer from "./reducer.js";
import { getTotals } from "./util.js";
const url = "https://www.course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(),
};

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };
  const fetchData = async () => {
    dispatch({ type: LOADING });
    const resp = await fetch(url);
    const cart = await resp.json();
    dispatch({ type: DISPLAY_ITEM, payload: { cart } });
    console.log(cart);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
