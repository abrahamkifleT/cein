import { createContext, useContext, useState, useEffect } from "react";
import { getAllCustomerGallery } from "../services/customerGallery.service";

const CustomerGalleryContext = createContext();

export const CustomerGalleryProvider = ({ children }) => {
    const [customerGallery, setCustomerGallery] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchcutomerGallery = async () => {
            try {
                const data = await getAllCustomerGallery();
                setCustomerGallery(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchcutomerGallery();
    }, [])

    const value = {
        customerGallery,
        loading,
        error,
    }


    return (
        <CustomerGalleryContext.Provider value={value}>
            {children}
        </CustomerGalleryContext.Provider>
    );
}

export const useCustomerGallery = () => {
    return useContext(CustomerGalleryContext);
}