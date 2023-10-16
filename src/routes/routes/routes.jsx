import React from 'react'
import { createBrowserRouter } from "react-router-dom";

// page import
import Main from '../../layout/Main';
import Shop from '../../pages/shop/Shop';
import Login from '../../pages/login/Login';
import Home from '../../pages/home/home/Home';
import Dashboard from '../../layout/Dashboard';
import Order from '../../components/order/Order';
import BlogDetails from '../../pages/blogs/BlogDetails';
import Shopping from '../../components/shopping/Shopping';
import Payment from '../../pages/dashboard/payment/Payment';
import MyCard from '../../pages/dashboard/user/myCard/MyCard';
import Registration from '../../pages/registration/Registration';
import AllUsers from '../../pages/dashboard/admin/allUsers/AllUsers';
import ProductCardDetails from '../../components/productCard/ProductCardDetails';
import WishlistItem from '../../pages/wishlist/WishlistItem';
import Seller from '../../pages/dashboard/seller/Seller';

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
        path:"shop",
        element:<Shop></Shop>
      },
      // {
      //   path:"/search/:query",
      //   element:<Shop></Shop>,
      //   // loader:({params})=>fetch(`http://localhost:5000/product/${params.category}`)
      // },
      {
        path:"blog/:id",
        element:<BlogDetails></BlogDetails>,
        loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
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
  },
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"allusers",
        element:<AllUsers />
      },
      {
        path:"my_cart",
        element:<MyCard></MyCard>
      },
      {
        path:"wishlist",
        element:<WishlistItem></WishlistItem>
      },
      {
        path:"seller",
        element:<Seller></Seller>
      },
      {
        path:"shopping",
        element:<Shopping></Shopping>
      },
      {
        path:"payment",
        element:<Payment></Payment>
      }
    ]
  }
])

export default routes