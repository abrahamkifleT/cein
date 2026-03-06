import { useCustomerGallery as useCustomerGalleryContext } from "../context/customerGallery.context";

export const useCustomerGallery = () => {
    return useCustomerGalleryContext();
}