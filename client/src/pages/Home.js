import React from 'react';
import Hero from '../components/Hero';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div className="container">
            <Cart />
            <Hero />
            <ProductList />
        </div>
    );
};

export default Home;