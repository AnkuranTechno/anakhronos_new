
import React from "react";
import { Navbar } from "./components";
import { Hero, About, Events } from "./sections";

import "./App.scss";
import Gallery from "./sections/Gallery/Gallery";
import Footer from './sections/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Footer/>
    </div>
  );
};

export default App;
