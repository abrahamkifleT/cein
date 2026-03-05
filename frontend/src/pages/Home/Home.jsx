import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import ShopByCategory from '../../components/home/ShopByCategory/ShopByCategory';
import ShopByCollection from '../../components/home/ShopByCollection/ShopByCollection';
import LearnMore from '../../components/home/LearnMore/LearnMore';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ShopByCategory />
            <ShopByCollection />
            <LearnMore />
        </div>
    );
};

export default Home;
