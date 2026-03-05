import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTestimonials } from '../../../hooks/useTestimonials';
import { useProducts } from '../../../hooks/useProduct';
import './Testimonials.css';

const Testimonials = () => {
    const { highRateTestimonials, loading, error } = useTestimonials();
    const { products } = useProducts();
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            // Left button moves items to the left (next), Right button moves items to the right (prev)
            const scrollTo = direction === 'left' ? scrollLeft + clientWidth : scrollLeft - clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    if (loading || error || !highRateTestimonials?.length) return null;

    return (
        <section className="testimonials-section">
            <button className="slider-btn prev" onClick={() => scroll('left')} aria-label="Previous">
                <ChevronLeft size={24} />
            </button>
            <div className="slider-controls">

                <div className="testimonials-list" ref={scrollRef}>
                    {highRateTestimonials.map((testimonial) => {
                        const product = products.find(p => p._id === testimonial.productId);

                        return (
                            <div key={testimonial._id} className="testimonial-item">
                                <div className="testimonial-content">
                                    <Quote size={40} className="quote-icon" />
                                    <p className="testimonial-header">People Are Talking</p>
                                    <div className="star-rating">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={20}
                                                fill={i < testimonial.rating ? "#fbbf24" : "none"}
                                                stroke={i < testimonial.rating ? "#fbbf24" : "#d1d5db"}
                                            />
                                        ))}
                                    </div>
                                    <p className="testimonial-message">"{testimonial.message}"</p>
                                    <p className="testimonial-attribution">
                                        <b>{testimonial.userName}</b>, {product?.name}
                                    </p>
                                </div>
                                <div className="testimonial-image">
                                    <img src={product?.images[0]} alt={product?.name} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button className="slider-btn next" onClick={() => scroll('right')} aria-label="Next">
                <ChevronRight size={24} />
            </button>
        </section>
    );
};

export default Testimonials;
