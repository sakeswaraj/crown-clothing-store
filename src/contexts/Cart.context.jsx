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
export const CartContext = createContext({
    cartState: false,
    setCartState: () => null,
    cartItems: [],
    addItemToCart: () => { },
    cardCount: 0
});

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cardCount, setCardCount] = useState(0)
    const addItemToCart = (product, operation) =>
        setCartItems(addCartItem(cartItems, product, operation));

    const value = { cartState, setCartState, cartItems, addItemToCart, cardCount };

    useEffect(() => {
        console.log("cartItems", cartItems);
        const totlaCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        setCardCount(totlaCartItems)
    }, [cartItems])

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
