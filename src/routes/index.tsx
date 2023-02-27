import React from "react";
import { RouteObject, useNavigate, Navigate } from "react-router-dom";
import Home from "views/Home/Home";
import App from "templates/App/App";
import DetailPage from "views/DetailPage/DetailPage";

// crear las rutas
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      { path: "*", element: <h2>404: No existe</h2> },
    ],
  },
];

export default routes;
