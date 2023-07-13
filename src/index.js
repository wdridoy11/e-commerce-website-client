import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./common.css"
import AuthProvider from "./context/AuthProvider";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
