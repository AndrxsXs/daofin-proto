import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

import Hero from "@pages/Hero";
import Home from "@pages/Home";
import Login from "@pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
    // element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <div>404</div>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <div>Dashboard</div>,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <div>Home del dashboard</div>,
        errorElement: <div>404</div>,
      },
      {
        path: "insight",
        element: <div>Insight</div>,
        errorElement: <div>404</div>,
      },
      {
        path: "projects",
        element: <div>Proyectos</div>,
        errorElement: <div>404</div>,
      },
      {
        path: "account",
        element: <div>Cuenta</div>,
        errorElement: <div>404</div>,
      },
      {
        path: "incentivize",
        element: <div>Incentivar</div>,
        errorElement: <div>404</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={routes} />
    </NextUIProvider>
  </StrictMode>
);
