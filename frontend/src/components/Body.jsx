import React from "react";
import {Navbar, Footer} from "."
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Body;
