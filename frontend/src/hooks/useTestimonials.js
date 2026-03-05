import { useContext } from "react";
import { TestimonialContext } from "../context/testimonials.context";

export const useTestimonials = () => {
    return useContext(TestimonialContext);
}