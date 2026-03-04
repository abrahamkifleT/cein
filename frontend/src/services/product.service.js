import products from "../data/products";

export const getAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // simulate API delay
  });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product._id === id));
        }, 500);
    });
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.categoryId === categoryId));
        }, 500);
    });
}

export const getProductsByCollection = (collectionId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.collectionIds.includes(collectionId)));
        }, 500);
    });
}

export const getProductsByTag = (tag) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.tags.includes(tag)));
        }, 500);
    });
}

export const getProductsByIsNew = (isNew) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.isNew === isNew));
        }, 500);
    });
}

export const getProductsByIsTrending = (isTrending) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.isTrending === isTrending));
        }, 500);
    });
}

export const getProductsByIsBestSeller = (isBestSeller) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.isBestSeller === isBestSeller));
        }, 500);
    });
}

export const getProductsByPrice = (minPrice, maxPrice) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.price >= minPrice && product.price <= maxPrice));
        }, 500);
    });
}

export const getProductsBySalePrice = (minSalePrice, maxSalePrice) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.salePrice >= minSalePrice && product.salePrice <= maxSalePrice));
        }, 500);
    });
}

