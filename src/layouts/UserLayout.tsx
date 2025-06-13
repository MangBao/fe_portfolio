// src/layouts/UserLayout.tsx
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const UserLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main id="home" className="pt-16 min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
