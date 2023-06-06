import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Main from '../../layout/Main';
import Home from '../../pages/home/home/Home';
import Login from '../../pages/login/Login';
import Registration from '../../pages/registration/Registration';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"registration",
          element:<Registration></Registration>
        }
      ]
    },
  ]);

export default router