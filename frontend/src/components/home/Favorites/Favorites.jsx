import React, { useRef, useState, useEffect, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import FavoriteCard from './FavoriteCard'
import { useProducts } from '../../../hooks/useProduct'
import './Favorites.css'

const Favorites = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { products } = useProducts();
    const favoriteProducts = useMemo(() => products.filter(p => p.isFavorite), [products]);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            // Calculate progress (0 to 1)
            const maxScroll = scrollWidth - clientWidth;
            if (maxScroll <= 0) return;

            const progress = scrollLeft / maxScroll;
            const newIndex = Math.round(progress * (favoriteProducts.length - 1));
            setActiveIndex(newIndex);
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
            return () => currentRef.removeEventListener('scroll', handleScroll);
        }
    }, [favoriteProducts.length]);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    const scrollToItem = (index) => {
        if (scrollRef.current) {
            const { scrollWidth, clientWidth } = scrollRef.current;
            const maxScroll = scrollWidth - clientWidth;
            const targetScroll = (index / (favoriteProducts.length - 1)) * maxScroll;

            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="favorites-section">
            <h3 className="favorites-title">Everlane Favorites</h3>
            <p className="favorites-subtitle">Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>

            <div className="favorites-carousel-container">
                <button
                    className="nav-btn prev"
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={24} />
                </button>

                <FavoriteCard scrollRef={scrollRef} />

                <button
                    className="nav-btn next"
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="favorites-pagination">
                {favoriteProducts.map((_, index) => (
                    <button
                        key={index}
                        className={`pagination-dot ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => scrollToItem(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Favorites