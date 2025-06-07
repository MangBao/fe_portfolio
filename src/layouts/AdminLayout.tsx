// src/layouts/AdminLayout.tsx
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AdminLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null; // hoặc loading spinner

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4">Admin Sidebar</aside>
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
