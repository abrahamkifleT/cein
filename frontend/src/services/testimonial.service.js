import testimonials from "../data/testimonials";

export const getAllTestimonials = () => {
    return testimonials;
}

export const getTestimonialById = (id) => {
    return testimonials.find((testimonial) => testimonial._id === id);
}

export const getTestimonialsByProductId = (productId) => {
    return testimonials.filter((testimonial) => testimonial.productId === productId);
}

export const getTestimonialsByUserId = (userId) => {
    return testimonials.filter((testimonial) => testimonial.userId === userId);
}

export const getTestimonialsByRating = (rating) => {
    return testimonials.filter((testimonial) => testimonial.rating === rating);
}

export const getTestimonialsByIsApproved = (isApproved) => {
    return testimonials.filter((testimonial) => testimonial.isApproved === isApproved);
}

export const getTestimonialsByCreatedAt = (createdAt) => {
    return testimonials.filter((testimonial) => testimonial.createdAt === createdAt);
}

export const getTestimonialsByUpdatedAt = (updatedAt) => {
    return testimonials.filter((testimonial) => testimonial.updatedAt === updatedAt);
}
