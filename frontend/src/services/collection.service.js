import collections from "../data/collections";

export const getAllCollections = () => {
    return collections;
}

export const getCollectionById = (id) => {
    return collections.find((collection) => collection._id === id);
}

export const getCollectionByName = (name) => {
    return collections.find((collection) => collection.name === name);
}


