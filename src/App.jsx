import React from "react";
import { Navbar } from "./components";
import { Hero, About, Events } from "./sections";

import "./App.scss";
import Gallery from "./sections/Gallery/Gallery";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
    </div>
  );
};

export default App;
