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
  Button,
} from "./sections";

import "./anakhronos.scss";
import { navLinks } from "../../data/events/anakhronos";
import { tmslLogo } from "../../constants/images";

const Anakhronos = () => {
  return (
    <div className="app">
      <Navbar navLinks={navLinks} logo={tmslLogo} />
      <Hero />
      <Button />
      <About />
      <Events />
      <Gallery />
      <Team />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Anakhronos;
