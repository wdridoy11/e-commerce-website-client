import React from 'react'
import { createBrowserRouter } from "react-router-dom";

// page import
import Main from '../../layout/Main';
import Shop from '../../pages/shop/Shop';
import Login from '../../pages/login/Login';
import Home from '../../pages/home/home/Home';
import Dashboard from '../../layout/Dashboard';
import Order from '../../components/order/Order';
import PrivetRoute from '../privetRoute/PrivetRoute';
import BlogDetails from '../../pages/blogs/BlogDetails';
import Seller from '../../pages/dashboard/seller/Seller';
import Shopping from '../../components/shopping/Shopping';
import Payment from '../../pages/dashboard/payment/Payment';
import WishlistItem from '../../pages/wishlist/WishlistItem';
import MyCard from '../../pages/dashboard/user/myCard/MyCard';
import Registration from '../../pages/registration/Registration';
import AllUsers from '../../pages/dashboard/admin/allUsers/AllUsers';
import MyProduct from '../../pages/dashboard/seller/myProduct/MyProduct';
import AddProduct from '../../pages/dashboard/seller/addProduct/AddProduct';
import ProductCardDetails from '../../components/productCard/ProductCardDetails';
import ManageProduct from '../../pages/dashboard/admin/manageProduct/ManageProduct';
import ProductUpdate from '../../pages/dashboard/seller/productUpdate/ProductUpdate';

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
        path:"shop",
        element:<Shop></Shop>
      },
      {
        path:"order",
        element:<Order></Order>
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
        path:"blog/:id",
        element:<BlogDetails></BlogDetails>,
        loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
      },
      {
        path:"productDetails/:id",
        element:<ProductCardDetails></ProductCardDetails>,
        loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      },
    ]
  },
  {
    path:"dashboard",
    element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
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
        path:"seller",
        element:<Seller></Seller>
      },
      {
        path:"payment",
        element:<Payment></Payment>
      },
      {
        path:"shopping",
        element:<Shopping></Shopping>
      },
      {
        path:"my_product",
        element:<MyProduct></MyProduct>
      },
      {
        path:"add_product",
        element:<AddProduct></AddProduct>
      },
      {
        path:"wishlist",
        element:<WishlistItem></WishlistItem>
      },

      {
        path:"manage_product",
        element:<ManageProduct></ManageProduct>
      },
      {
        path:"product_update:/id",
        element:<ProductUpdate></ProductUpdate>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      }
    ]
  }
])

export default routes