import React from 'react';
import { Navbar } from '../../components';
import {
  Hero,
  About,
  Events,
  Gallery,
  Team,
  Footer,
  Sponsors,
} from './sections';

import "./freshers.scss";
import { navLinks } from "../../data/events/anakhronos";
import { tmslLogo } from "../../constants/images";
import Loader from "../ankuran/sections/Loader/Loader";

const Freshers = () => {
  return (
    <div className="app">
      <Loader/>
      <Navbar navLinks={navLinks} logo={tmslLogo} />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Team />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Freshers;
