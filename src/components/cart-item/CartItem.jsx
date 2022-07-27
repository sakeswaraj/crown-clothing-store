import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import "./CartItem.scss";

function CartItem({ cartItem }) {
    const { imageUrl, price, name, quantity } = cartItem;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = (operation) => addItemToCart(cartItem, operation);
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="flex-row">
                    <span className="price">${price}</span>
                    <span className="total">${quantity * price}</span>
                </span>
                <span className="quantity">
                    <RemoveCircleIcon onClick={() => addProductToCart("min")} />
                    {quantity}
                    <AddCircleIcon onClick={() => addProductToCart("add")} />
                </span>
            </div>
        </div>
    );
}

export default CartItem;
