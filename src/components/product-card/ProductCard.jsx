import React, { useContext } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../contexts/Cart.context';
import Button from '../button/Button';
import "./ProductCard.scss";


function ProductCard({ product }) {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const notify = () => toast(`${name}, added succesfully!`);

    const addProductToCart = () => {
        notify()
        addItemToCart(product);

    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default ProductCard