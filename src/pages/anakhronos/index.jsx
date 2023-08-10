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
import { navLinksAnakhronos } from "../../data/events/anakhronos";
import { tmslLogo } from "../../constants/images";
import Loader from "../ankuran/sections/Loader/Loader";
import GuestArtist from "./sections/GuestArtist/GuestArtist";
const Anakhronos = () => {
  return (
    <div className="app">
      <Loader/>
      <Navbar navLinks={navLinksAnakhronos} logo={tmslLogo} />
      <Hero />
      <About />
      <GuestArtist/>
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
