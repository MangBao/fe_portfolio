import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

// Lazy load pages
const Home = lazy(() => import("../pages/users/Home"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));
// const Users = lazy(() => import('../pages/admin/Users'));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      //   { path: 'users', element: <Users /> },
    ],
  },
];

export default routes;
