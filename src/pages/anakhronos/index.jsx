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
  Artist,
  WebTeam,
  Merchandise
} from "./sections";

// import Login  from "../../../src/components/Login/Login"

import "./anakhronos.scss";
import { navLinks } from "../../data/events/anakhronos";
import { tmslLogo } from "../../constants/images";
import Loader from "../ankuran/sections/Loader/Loader";

const Anakhronos = () => {
  return (
    <div className="app">
      <Loader/>
      <Navbar navLinks={navLinks} logo={tmslLogo} />
      <Hero />
      <About />
      <Events />
      <Artist/>
      <Gallery />
      <Merchandise/>
      <Team />
      <WebTeam/>
      <Sponsors />
      <Footer />
    </div>
  );
};
export default Anakhronos;
