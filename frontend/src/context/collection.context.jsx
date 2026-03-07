import { createContext, useContext, useEffect, useState } from "react";
import { getAllCollections } from "../services/collection.service";

const CollectionContext = createContext();

export const CollectionContextProvider = ({ children }) => {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCollections = () => {
            try {
                const data = getAllCollections();
                setCollections(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCollections();
    }, []);

    return (
        <CollectionContext.Provider value={{ collections, loading, error }}>
            {children}
        </CollectionContext.Provider>
    );
};

export const useCollections = () => {
    return useContext(CollectionContext);
};