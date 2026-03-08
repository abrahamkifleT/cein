import React from 'react';
import './AboutHero.css';
import heroImage from '../../../assets/images/about/about_page_hero.png';

const AboutHero = () => {
    return (
        <div className="about-hero">
            <img src={heroImage} alt="About Hero" className="about-hero__image" />
            <div className="about-hero__content">
                <h1>We believe we can all make difference.</h1>
                <p>Our way: Exceptional quality Ethical factories. Radical Transparency.</p>
            </div>
        </div>
    );
};

export default AboutHero;