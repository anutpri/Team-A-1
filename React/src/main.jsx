import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Create from './Create';
import Profile from './Profile';
import Edit from './Edit';
import Activities from './Card';
import MyDashboard from './MyDashboard';
import Landing from './Landing';
import ChangePass from './ChangePass';



const router = createBrowserRouter([
  // insert your path here
  {
    path: '/',
    element: <Landing />,
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
  {
    path: '/Profile',
    element: <Profile />,
  },
  {
    path: '/ChangePass',
    element: <ChangePass />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
