import React from 'react';
import {
  Hero,
  Management,
  Team,
  Footer,
  College,
  Contact,
  Merchandise,
} from './sections';
import { Navbar } from '../../components';
import { navLinks } from '../../data/events/anakhronos';
import { tmslLogo } from '../../constants/images';
import Megaevent from './sections/Mega Events/MegaEvent';
import './ankuran.scss';

const Ankuran = () => {
  return (
    <div className="app">
      <Navbar navLinks={navLinks} logo={tmslLogo} />
      <Hero />
      <College />
      <Megaevent />
      <Management />
      {/* <Merchandise /> */}
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Ankuran;
