import customerGallery from "../data/customerGallery";

export const getAllCustomerGallery = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(customerGallery);
        }, 500);
    });
}

export const getCustomerGalleryById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(customerGallery.find((gallery) => gallery._id === id));
        }, 500);
    });
}


export const getCustomerGalleryByUserId = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(customerGallery.filter((gallery) => gallery.userId === userId));
        }, 500);
    });
}

export const getCustomerGalleryByProductId = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(customerGallery.filter((gallery) => gallery.productId === productId));
        }, 500);
    });
}

export const getCustomerGalleryByIsApproved = (isApproved) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(customerGallery.filter((gallery) => gallery.isApproved === isApproved));
        }, 500);
    });
}

export const getCustomerGalleryByCreatedAt = (createdAt) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(customerGallery.filter((gallery) => gallery.createdAt === createdAt));
        }, 500);
    });
}

export const getCustomerGalleryByUpdatedAt = (updatedAt) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(customerGallery.filter((gallery) => gallery.updatedAt === updatedAt));
        }, 500);
    });
}


