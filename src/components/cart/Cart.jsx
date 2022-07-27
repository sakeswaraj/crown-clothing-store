import React, { useContext } from 'react';
import { ReactComponent as ShoppingCartComponent } from "../../assets/shopping-cardt.svg";
import { CartContext } from '../../contexts/Cart.context';
import "./Cart.scss";

function Cart() {
    const { cartState, setCartState } = useContext(CartContext)

    const onClickHandler = () => {
        setCartState(prev => !prev)
    }
    return (
        <div className="cart-icon-container" onClick={onClickHandler}>
            <ShoppingCartComponent className="shopping-icon" />
            <span className="item-count">10</span>
        </div>
    )
}

export default Cart