import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart.context';
import Button from "../button/Button";
import CartItem from '../cart-item/CartItem';
import "./CardDropdown.scss";
function CartDropdown() {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()

    const goToCheckOutHandler = () => {
        navigate("/checkout")
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>

            <Button onClick={goToCheckOutHandler}> CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown