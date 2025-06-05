import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

const Home = lazy(() => import("../pages/users/Home"));
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <UserLayout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ path: "", element: <Dashboard /> }],
  },
];

export default routes;
