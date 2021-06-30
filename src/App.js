import React from 'react';
import Hero from './components/Hero';
import './App.css';
import Header from './components/Header';
import Navi from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <Navi/>
      <Hero/>
    </div>

  );
}

export default App;
