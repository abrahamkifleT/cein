import collections from "../data/collections";

export const getAllCollections = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(collections);
        }, 500);
    });
}

export const getCollectionById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(collections.find((collection) => collection._id === id));
        }, 500);
    });
}

export const getCollectionByName = (name) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(collections.find((collection) => collection.name === name));
        }, 500);
    });
}


