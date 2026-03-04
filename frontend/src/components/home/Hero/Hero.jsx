import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__background">
                <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=2000"
                    alt="Cozy Winter Essentials"
                />
                <div className="hero__overlay"></div>
            </div>

            <div className="container hero__container">
                <div className="hero__content">
                    <h2 className="hero__title">Your Cozy Era</h2>
                    <p className="hero__subtitle">
                        Get peak comfy-chic <br />
                        with new winter essentials.
                    </p>
                    <button className="hero__cta">SHOP NOW</button>
                </div>

                <div className="hero__pagination">
                    <button className="hero__arrow" aria-label="Previous">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <span className="hero__counter">1 / 10</span>
                    <button className="hero__arrow" aria-label="Next">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
