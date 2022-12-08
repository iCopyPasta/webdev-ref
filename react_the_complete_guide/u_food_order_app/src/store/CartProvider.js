import CartContext from "./cart-context";

import { useReducer } from "react";


const defaultCartState = {
    items: [],
    totalAmount: 0
};

// state - identified/dispatched by you
// action - last state snapshot of state managed by Reducer
// return a new state snapshot
const cartReducer = (state, action) => {

    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => {
                return item.id === action.item.id;
            }
        );

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        // override the object at the idnex
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        // for the first time
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };

    }

    if (action.type === "REMOVE") {

        const existingCartItemIndex = state.items.findIndex(
            (item) => {
                return item.id === action.id;
            }
        );

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if (existingItem.amount === 1){
            // all items where the item id isn't the one we want to remove
            // are kept
            // the one item where action.id (to be removed), we return false
            // and remove from newly generated array
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: "ADD",
            item: item
        });

    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: "REMOVE",
            id: id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;