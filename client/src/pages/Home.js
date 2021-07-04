import React from 'react';
import Hero from '../components/Hero';
import Cart from '../components/Cart';
import Category from '../components/Category';

const Home = () => {
    return (
        <div className="container">
            <Cart />
            <Hero />
            <Category />
        </div>
    );
};

export default Home;