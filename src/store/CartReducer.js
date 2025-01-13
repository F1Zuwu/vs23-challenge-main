const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const existingItemIndex = state.findIndex(
            (item) => item.id === action.item.id
        );

        if (existingItemIndex !== -1) {
            return state.map((item, index) => {
                if (index === existingItemIndex) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        } else {
            return [...state, { ...action.item, quantity: 1 }];
        }
    } else if (action.type === "RESET_CART") {
        return [];
    } else {
        return state;
    }
};

export default cartReducer;