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
import { navLinks } from '../../data/ankuran';
import { tmslLogo } from '../../constants/images';
import Megaevent from './sections/Mega Events/MegaEvent';
import './ankuran.scss';
import Loader from './sections/Loader/Loader';

const Ankuran = () => {
  return (
    <div className="app">
      <Loader/>
      <Navbar navLinks={navLinks} logo={tmslLogo} />
      <Hero />
      <College />
      <Megaevent />
      <Management />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Ankuran;
