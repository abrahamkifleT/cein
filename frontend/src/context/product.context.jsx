import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/product.Service";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllProducts()
            .then((products) => setProducts(products))
            .finally(() => setLoading(false))
            .catch((error) => setError(error));
    }, []);

    return (
        <ProductContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;  