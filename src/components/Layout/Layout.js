import React from "react";
import Navbar from "../Navbar/Navbar";
import AnakhronosEventform from "../forms/anakhronosEvent"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <AnakhronosEventform/>
    </>
  );
};

export default Layout;
