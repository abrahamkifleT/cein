import products from "../data/products";

export const getAllProducts = () => {
    return products;
};

export const getProductById = (id) => {
    return products.find((product) => product._id === id);
}

export const getProductsByCategory = (categoryId) => {
    return products.filter((product) => product.categoryId === categoryId);
}

export const getProductsByCollection = (collectionId) => {
    return products.filter((product) => product.collectionIds.includes(collectionId));
}

export const getProductsByTag = (tag) => {
    return products.filter((product) => product.tags.includes(tag));
}

export const getProductsByIsNew = (isNew) => {
    return products.filter((product) => product.isNew === isNew);
}

export const getProductsByIsTrending = (isTrending) => {
    return products.filter((product) => product.isTrending === isTrending);
}

export const getProductsByIsBestSeller = (isBestSeller) => {
    return products.filter((product) => product.isBestSeller === isBestSeller);
}

export const getProductsByPrice = (minPrice, maxPrice) => {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}

export const getProductsBySalePrice = (minSalePrice, maxSalePrice) => {
    return products.filter((product) => product.salePrice >= minSalePrice && product.salePrice <= maxSalePrice);
}

