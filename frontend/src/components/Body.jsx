import React from "react";
import {Navbar, Footer} from "."
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
     <div className="bg-black text-white ">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Body;
