import React from "react"
import { RouteObject, useNavigate, Navigate } from "react-router-dom"
import Home from "views/Home/Home"
import App from "templates/App/App"


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
            { path: "*", element: <h2>404: No existe</h2> },
        ],
    },
]

export default routes
