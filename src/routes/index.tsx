// src/routes/index.tsx
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import { useAuth } from "../contexts/AuthContext";

// Lazy load pages
const Home = lazy(() => import("../pages/users/Home"));
const AdminDashboard = lazy(() => import("../pages/admin/Dashboard"));
const AdminLogin = lazy(() => import("../pages/admin/AdminLogin"));

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* User Layout */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        {/* Thêm các route public khác tại đây nếu có */}
      </Route>

      {/* Admin login (nằm ngoài layout admin) */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin Layout - yêu cầu authentication */}
      <Route
        path="/admin"
        element={
          isAuthenticated ? (
            <AdminLayout />
          ) : (
            <Navigate to="/admin/login" replace />
          )
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

      {/* Redirect nếu không khớp */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
