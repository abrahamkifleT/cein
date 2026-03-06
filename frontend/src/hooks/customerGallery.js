import { useContext } from "react";
import { CustomerGalleryProvider } from "../context/customerGallery.context";

export const useCustomerGallery = () => {
    return useContext(CustomerGalleryProvider)
}