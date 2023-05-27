import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/HomeLayout/Home.jsx';

import { HelmetProvider } from 'react-helmet-async';
import OurMenuHome from './component/OurMenuPageLayout/OurMenuHome.jsx';
import OrderFoodHome from './component/OrderFoodLayout/OrderFoodHome.jsx';
import Login from './component/LoginRegestationLayoout/Login/Login.jsx';
import Regestation from './component/LoginRegestationLayoout/Regestation/Regestation.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/ourMenu',
        element: <OurMenuHome />
      },
      {
        path: '/orderFood',
        element: <OrderFoodHome />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/regestation',
        element: <Regestation />
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode >
)
