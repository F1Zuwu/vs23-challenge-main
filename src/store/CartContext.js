import React, { useState, useContext } from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (item) => { },
    totalItems: 0
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(
                (cartItem) => cartItem.id === item.id
            );

            if (existingItemIndex !== -1) {

                const updatedItems = [...prevItems];
                const existingItem = updatedItems[existingItemIndex];


                updatedItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                };

                return updatedItems;
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };


    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ items, addItem, totalItems }}
        >
            {children}
        </CartContext.Provider>
    );
};
