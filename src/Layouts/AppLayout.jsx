// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
