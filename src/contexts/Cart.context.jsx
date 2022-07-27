import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd, operation) => {
    console.log("cartItems", cartItems, "productToAdd", productToAdd);
    //check whether the added product is already in the cart
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? operation === "add"
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : { ...cartItem, quantity: cartItem.quantity - 1 }
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
});

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState(false);
    const [cartItem, setCartItem] = useState([]);

    const addItemToCart = (product, operation) =>
        setCartItem(addCartItem(cartItem, product, operation));

    const value = { cartState, setCartState, cartItem, addItemToCart };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
