import React from 'react'
import { createBrowserRouter } from "react-router-dom";
// page import
import Main from '../../layout/Main';
import Login from '../../pages/login/Login';
import About from '../../pages/about/About';
import Home from '../../pages/home/home/Home';
import Registration from '../../pages/registration/Registration';
import ProductCardDetails from '../../components/productCard/ProductCardDetails';
import Order from '../../components/order/Order';
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
        path:"productDetails",
        element:<ProductCardDetails></ProductCardDetails>
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
        element:<Order></Order>
      }
    ]
  }
])

export default routes