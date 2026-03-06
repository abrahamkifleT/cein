import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import ShopByCategory from '../../components/home/ShopByCategory/ShopByCategory';
import ShopByCollection from '../../components/home/ShopByCollection/ShopByCollection';
import Favorites from '../../components/home/Favorites/Favorites';
import LearnMore from '../../components/home/LearnMore/LearnMore';
import Testimonials from '../../components/home/Testimonials/Testimonials';
import SomeBlogPost from '../../components/home/SomeBlogPost/SomeBlogPost';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ShopByCategory />
            <ShopByCollection />
            <LearnMore />
            <Favorites />
            <Testimonials />
            <SomeBlogPost />
        </div>
    );
};

export default Home;
