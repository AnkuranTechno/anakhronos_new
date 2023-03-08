import React from 'react'
import { Navbar, Team } from './sections'
import { navLinks } from "../../data/events/anakhronos";
import {tmslLogo } from "../../constants/images";

const Ankuran = () => {
  return (
    <div className='app'>
        <Navbar navLinks={navLinks } logo={tmslLogo}/>
        <Team/>
    </div>
  )
};

export default Ankuran;