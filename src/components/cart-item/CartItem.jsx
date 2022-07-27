import React from "react";
import "./CartItem.scss";

function CartItem({ cartItem }) {
    const { imageUrl, price, name, quantity } = cartItem;

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
                    {quantity}
                </span>
            </div>
        </div>
    );
}

export default CartItem;
