import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./component/ErrorPage/ErrorPage.jsx";
import Home from "./component/HomeLayout/Home.jsx";
import { HelmetProvider } from "react-helmet-async";
import OurMenuHome from "./component/OurMenuPageLayout/OurMenuHome.jsx";
import OrderFoodHome from "./component/OrderFoodLayout/OrderFoodHome.jsx";
import Login from "./component/LoginRegestationLayoout/Login/Login.jsx";
import Regestation from "./component/LoginRegestationLayoout/Regestation/Regestation.jsx";
import AuthProvider from "./component/Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute.jsx";
import Dashboard from "./DashBoardInterface/Dashboard.jsx";
import MyCart from "./DashBoardInterface/MyCart/MyCart.jsx";
import AllUsers from "./DashBoardInterface/AdminLayout/AllUsers/AllUsers.jsx";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourMenu",
        element: <OurMenuHome />,
      },
      {
        path: "/orderFood",
        element: <OrderFoodHome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/regestation",
        element: <Regestation />,
      },
    ],
  },

  {
    path: "dashboard",
    errorElement: <div>404 Not Found</div>,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },

      {
        path: "allUsers",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
