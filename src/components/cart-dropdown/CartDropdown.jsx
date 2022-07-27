import React from 'react';
import Button from '../button/Button';
import "./CardDropdown.scss";

function CartDropdown() {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown