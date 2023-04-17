// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Error from './Error';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';

const router = createBrowserRouter([
  // insert your path here
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Signup',
    element: <Signup />
  },
  {
    path: '/Create',
    element: <Create />
  },
  {
    path: '/Update',
    element: <Update />
  },
  {
    path: '/Delete',
    element: <Delete />
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)