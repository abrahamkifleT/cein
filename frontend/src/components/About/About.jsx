import React from 'react';
import './About.css';
import heroImage from '../../assets/images/about/about_page_hero.png';

const AboutHero = () => {
    return (
        <>
            <div className="about-hero">
                <img src={heroImage} alt="About Hero" className="about-hero__image" />
                <div className="about-hero__content">
                    <h1>We believe we can all make difference.</h1>
                    <p>Our way: Exceptional quality Ethical factories. Radical Transparency.</p>
                </div>
            </div>

            <div className='about-mission'>
                <div className='about-mission__container'>
                    <h4>At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.</h4>
                </div>
            </div>
        </>
    )
}

export default AboutHero;