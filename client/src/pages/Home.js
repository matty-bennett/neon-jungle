import React from 'react';
// import Header from '../components/Header';
import Hero from '../components/Hero';
// import Footer from '../components/Footer';
import Cart from '../components/Cart';

const Home = () => {
    return (
        <div className="container">
            {/* <Header /> */}
            <Cart />
            <Hero />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;