import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/product.service";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const data = getAllProducts();
            setProducts(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <ProductContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;  