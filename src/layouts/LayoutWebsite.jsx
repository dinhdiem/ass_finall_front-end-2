import React from "react";
import { Outlet } from "react-router-dom";
import FooterHome from "./FooterHome";
import NavHome from "./NavHome";

const LayoutWebsite = () => {
  return (
    <div>
      <NavHome />
      <Outlet />
      <FooterHome />
    </div>
  );
};

export default LayoutWebsite;
