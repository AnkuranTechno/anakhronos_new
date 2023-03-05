import React from 'react';
import { Navbar } from './components';
import { Hero, About, Events } from './sections';

import Footer from './sections/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Footer/>
    </div>
  );
};

export default App;
