import { createContext, useEffect, useState } from "react";

export const addCartItem = (cartItems, productToAdd, operation) => {
    //check whether the added product is already in the cart
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );
    //check if quantity is equal to than 1 , then reomve the item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
    //return back mqtchig cart items with decrease in the quantitly
    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
export const CartContext = createContext({
    cartState: false,
    setCartState: () => null,
    cartItems: [],
    addItemToCart: () => { },
    removeCartItem: () => { },
    cardCount: 0,
    clearItemFromCart: () => { },
    cartTotal: 0,
});

const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cardCount, setCardCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (product) =>
        setCartItems(addCartItem(cartItems, product));

    const removeItemFromCart = (product) =>
        setCartItems(removeCartItem(cartItems, product));

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };



    useEffect(() => {
        console.log("cartItems", cartItems);
        const totlaCartItems = cartItems.reduce(
            (acc, item) => acc + item.quantity,
            0
        );
        setCardCount(totlaCartItems);
    }, [cartItems]);


    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const value = {
        cartState,
        setCartState,
        cartItems,
        addItemToCart,
        cardCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
