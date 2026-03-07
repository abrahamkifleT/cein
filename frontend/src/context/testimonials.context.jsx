import { createContext, useContext, useState, useEffect } from "react";
import { getAllTestimonials } from "../services/testimonial.service";
import products from "../data/products";
import users from "../data/users";

export const TestimonialContext = createContext();

export const TestimonialProvider = ({ children }) => {
    const [testimonials, setTestimonials] = useState([]);
    const [highRateTestimonials, setHighRateTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getHighRateTestimonials = () => {
        const filtered = testimonials.filter((testimonial) => testimonial.rating >= 4);
        setHighRateTestimonials(filtered);
    }

    useEffect(() => {
        const fetchTestimonials = () => {
            try {
                setLoading(true);
                const data = getAllTestimonials();

                // Join user data
                const enrichedData = data.map(testimonial => {
                    const user = users.find(u => u._id === testimonial.userId);
                    return {
                        ...testimonial,
                        userName: user ? user.name : "Anonymous"
                    };
                });

                setTestimonials(enrichedData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    useEffect(() => {
        if (testimonials.length > 0) {
            getHighRateTestimonials();
        }
    }, [testimonials]);

    const value = {
        testimonials,
        loading,
        error,
        highRateTestimonials,
    }

    return (
        <TestimonialContext.Provider value={value}>
            {children}
        </TestimonialContext.Provider>
    );
};

export const useTestimonials = () => {
    return useContext(TestimonialContext);
};