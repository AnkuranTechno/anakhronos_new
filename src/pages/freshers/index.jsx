import React from 'react';
import { Navbar } from '../../components';
import {
  WebTeam,
  Hero,
  About,
  Events,
  Gallery,
  Team,
  Footer,
  Sponsors,
} from './sections';

import "./freshers.scss";
import { navLinksPrarambh } from "../../data/events/anakhronos";
import { tmslLogo } from "../../constants/images";
import Loader from "../ankuran/sections/Loader/Loader";

const Freshers = () => {
  return (
    <div className="app">
      <Loader/>
      <Navbar navLinks={navLinksPrarambh} logo={tmslLogo} />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Team />
      <WebTeam/>
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Freshers;
