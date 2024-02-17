import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import GuestLayout from "./layouts/GuestLayout";
import Inicio from "./views/Inicio";
import Login from "./views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
    ],
  },
  {
    path: "/auth",
    element: <GuestLayout />,
    children: [
        {
            path: '/auth/login',
            element: <Login />
        }
    ],
  },
]);

export default router;
