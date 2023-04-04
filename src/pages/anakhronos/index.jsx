import React from "react";
import { Navbar } from "../../components";

import {
  Hero,
  About,
  Events,
  Gallery,
  Team,
  Footer,
  Sponsors,
  Artist
} from "./sections";

// import Login  from "../../../src/components/Login/Login"

import "./anakhronos.scss";
import { navLinks } from "../../data/events/anakhronos";
import { tmslLogo } from "../../constants/images";

const Anakhronos = () => {
  return (
    <div className="app">
      <Navbar navLinks={navLinks} logo={tmslLogo} />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Team />
      <Artist/>
      <Sponsors />
      <Footer />
      {/* <Login/> */}
    </div>
  );
};
export default Anakhronos;
