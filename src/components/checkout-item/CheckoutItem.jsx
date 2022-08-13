import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../contexts/Cart.context';
import "./CheckoutItem.scss";

function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;

    const notify = () => toast(`${name} cleared successfully from cart`);

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => {
        notify()
        clearItemFromCart(cartItem)
    };
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'> {price}</span>
            <div className='remove-button' onClick={clearItemHandler}>
                &#10005;
            </div>
            <ToastContainer position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </div>
    )
}

export default CheckoutItem