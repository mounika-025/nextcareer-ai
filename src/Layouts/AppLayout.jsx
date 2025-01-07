// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";

import Header from "@/components/Header";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
      </main>

      <Outlet />
    </div>
  );
};

export default AppLayout;
