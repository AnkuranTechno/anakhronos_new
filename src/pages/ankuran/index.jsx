import React from "react";
import { Management, Team } from "./sections";
import { Navbar } from "../../components";
import { navLinks } from "../../data/events/anakhronos";
import { tmslLogo } from "../../constants/images";
import Megaevent from "./sections/Mega Events/MegaEventCard";
const Ankuran = () => {
  return (
    <div className="app">
      <Navbar navLinks={navLinks} logo={tmslLogo} />
      <Team />
      <Megaevent />
      <Management />
    </div>
  );
};

export default Ankuran;
