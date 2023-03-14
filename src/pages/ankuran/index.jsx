import React from 'react';
import { Hero, Management, Team, Footer } from './sections';
import { Navbar } from '../../components';
import { navLinks } from '../../data/events/anakhronos';
import { tmslLogo } from '../../constants/images';
import Megaevent from './sections/Mega Events/MegaEventCard';
import './ankuran.scss';

const Ankuran = () => {
  return (
    <div className="app">
      <Navbar navLinks={navLinks} logo={tmslLogo} />
      <Hero />
      <Megaevent />
      <Management />
      <Team />
      <Footer />
    </div>
  );
};

export default Ankuran;
