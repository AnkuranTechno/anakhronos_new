import React from 'react'
import { Navbar, Team } from './sections'
import { navLinks } from "../../data/events/anakhronos";
import {tmslLogo } from "../../constants/images";
import Megaevent from './sections/Mega Events/MegaEventCard';

const Ankuran = () => {
  return (
    <div className='app'>
        <Navbar navLinks={navLinks } logo={tmslLogo}/>
        <Team/>
        <Megaevent/>
    </div>
  );
};

export default Ankuran;
