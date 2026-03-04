import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import ShopByCategory from '../../components/home/ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ShopByCategory />
        </div>
    );
};

export default Home;
