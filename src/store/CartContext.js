import { createContext, useReducer, useEffect } from "react";
import CartReducer from "./CartReducer";
const CartContext = createContext({
    addItem: () => { },
    resetCart: () => { },
    items: [],
});

export const CartProvider = ({ children }) => {
    const [items, dispatch] = useReducer(CartReducer, []);

    const addItem = (meal) => {
        dispatch({ type: "ADD_ITEM", item: meal });
    };

    const resetCart = () => {
        dispatch({ type: "RESET_CART" });
    };

    return (
        <CartContext.Provider value={{ addItem, resetCart, items }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;