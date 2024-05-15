import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return <div className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
    <Navbar />
  </div>;
};

export default Header;
