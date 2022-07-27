import React, { useContext } from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import { ProductsContext } from '../../contexts/Products.context';
import "./Shop.scss";

const Shop = () => {
    const { products } = useContext(ProductsContext)
    console.log("products", products);
    return (
        <div className='products-container'>
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}
export default Shop;
