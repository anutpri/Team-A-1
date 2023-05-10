import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Create from './Create';

import Edit from './Edit';
import Dashboard from './Dashboard';
import Activities from './Card';
import MyDashboard from './MyDashboard';

const router = createBrowserRouter([
  // insert your path here
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Signup',
    element: <Signup />,
  },
  {
    path: '/Dashboard',
    element: <MyDashboard />,
  },
  {
    path: '/Create',
    element: <Create />,
  },
  {
    path: '/Edit',
    element: <Edit />,
  },
  {


    path: '/Card',
    element: <Activities />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
