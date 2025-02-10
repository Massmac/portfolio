import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render the current page's content */}
    </>
  );
};

export default Layout;
