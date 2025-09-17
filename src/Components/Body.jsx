import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Navigate to="/login" replace /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
