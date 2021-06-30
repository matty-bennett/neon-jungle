
import React from 'react';
import Hero from './components/Hero';
// import './App.css';
import Header from './components/Header';
import Navi from './components/Nav';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <Navi/>
      <Hero/>
      <Footer/>
    </div>

  );
}

export default App;
