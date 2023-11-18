import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
  ]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

