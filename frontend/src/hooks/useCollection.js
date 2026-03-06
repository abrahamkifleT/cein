import { useCollections as useCollectionsFromContext } from "../context/collection.context";

export const useCollections = () => {
    return useCollectionsFromContext();
};

export const useCollection = useCollections;
