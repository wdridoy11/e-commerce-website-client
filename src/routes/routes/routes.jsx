import React from 'react'
import { createBrowserRouter } from "react-router-dom";

// page import
import Main from '../../layout/Main';
import Login from '../../pages/login/Login';
import About from '../../pages/about/About';
import Home from '../../pages/home/home/Home';
import Dashboard from '../../layout/Dashboard';
import Order from '../../components/order/Order';
import PrivetRoute from '../privetRoute/PrivetRoute';
import Registration from '../../pages/registration/Registration';
import AllUsers from '../../pages/dashboard/admin/allUsers/AllUsers';
import ProductCardDetails from '../../components/productCard/ProductCardDetails';

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        // path:"productDetails",
        path:"productDetails/:id",
        element:<ProductCardDetails></ProductCardDetails>,
        loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"sign_up",
        element:<Registration></Registration>
      },
      {
        path:"order",
        element:<PrivetRoute><Order></Order></PrivetRoute>
      }
    ]
  },
  {
    path:"dashboard",
    element:<Dashboard />,
    children:[
      {
        path:"allusers",
        element:<AllUsers />
      }
    ]
  }
])

export default routes