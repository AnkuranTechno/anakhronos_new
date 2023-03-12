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
  Management,
} from "./sections";

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
      <Sponsors />
      <Management />
      <Footer />
    </div>
  );
};

export default Anakhronos;
