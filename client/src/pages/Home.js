import React from 'react';
import Hero from '../components/Hero';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div>
            <div className="hero">
                <Cart />
                <Hero />
            </div>
            <div className="container">
                <ProductList />
            </div>
        </div>
    );
};

export default Home;