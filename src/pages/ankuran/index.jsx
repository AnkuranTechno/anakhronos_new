import React from 'react';
import { Navbar } from '../../components';
import { Team } from './sections';
import { navLinks } from '../../data/events/anakhronos';
import { tmslLogo } from '../../constants/images';

import './ankuran.scss';

const Ankuran = () => {
  return (
    <div className="app ankuran">
      <Navbar navLinks={navLinks} logo={tmslLogo} />
      <Team />
    </div>
  );
};

export default Ankuran;
