import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./common.css"
import AuthProvider from "./context/AuthProvider";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes/routes";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient=  new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
