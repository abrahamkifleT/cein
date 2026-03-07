import customerGallery from "../data/customerGallery";

export const getAllCustomerGallery = () => {
    return customerGallery;
}

export const getCustomerGalleryById = (id) => {
    return customerGallery.find((gallery) => gallery._id === id);
}


export const getCustomerGalleryByUserId = (userId) => {
    return customerGallery.filter((gallery) => gallery.userId === userId);
}

export const getCustomerGalleryByProductId = (productId) => {
    return customerGallery.filter((gallery) => gallery.productId === productId);
}

export const getCustomerGalleryByIsApproved = (isApproved) => {
    return customerGallery.filter((gallery) => gallery.isApproved === isApproved);
}

export const getCustomerGalleryByCreatedAt = (createdAt) => {
    return customerGallery.filter((gallery) => gallery.createdAt === createdAt);
}

export const getCustomerGalleryByUpdatedAt = (updatedAt) => {
    return customerGallery.filter((gallery) => gallery.updatedAt === updatedAt);
}


