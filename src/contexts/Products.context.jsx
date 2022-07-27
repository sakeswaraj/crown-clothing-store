import { createContext, useState } from "react";
import { shopData } from "../utils/ArrayList";

export const ProductsContext = createContext({
    products: []
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(shopData)
    const value = { products }
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}