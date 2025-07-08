import {
  createHashRouter,
  RouterProvider,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import React from "react";
import Login from "../views/login";
import RecoverPassword from "../views/recoverPassword";

const routes = createHashRouter([
  {
    element: <Login />,
    path: "/login",
  },

  {
    element: <RecoverPassword />,
    path: "/RecuperarSenha",
  },
]);

const AppRouter = () => <RouterProvider router={routes} />;

export default AppRouter;
