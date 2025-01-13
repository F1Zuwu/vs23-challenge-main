import React, { useReducer } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext";

const ADD_ITEM = "ADD_ITEM";

const cartReducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1,
      };
      return { items: updatedItems };
    } else {
      return {
        items: [...state.items, { ...action.item, quantity: 1 }],
      };
    }
  }

  return state;
};


const defaultCartState = {
  items: [],
};

const App = () => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: ADD_ITEM, item });
  };

  const totalItems = cartState.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartProvider
      value={{
        items: cartState.items,
        addItem: addItemToCart,
        totalItems,
      }}
    >
      <Header />
      <Meals />
    </CartProvider>
  );
};

export default App;
