import React from 'react'
import { createBrowserRouter } from "react-router-dom";

// page import
import Main from '../../layout/Main';
import Shop from '../../pages/shop/Shop';
import Order from '../../pages/order/Order';
import Login from '../../pages/login/Login';
import Home from '../../pages/home/home/Home';
import Dashboard from '../../layout/Dashboard';
import PrivetRoute from '../privetRoute/PrivetRoute';
import BlogDetails from '../../pages/blogs/BlogDetails';
import Shopping from '../../components/shopping/Shopping';
import Payment from '../../pages/dashboard/payment/Payment';
import WishlistItem from '../../pages/wishlist/WishlistItem';
import MyCard from '../../pages/dashboard/user/myCard/MyCard';
import Registration from '../../pages/registration/Registration';
import AllUsers from '../../pages/dashboard/admin/allUsers/AllUsers';
import AdminHome from '../../pages/dashboard/admin/adminHome/AdminHome';
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
        loader:({params})=>fetch(`${process.env.REACT_APP_API_URL}/blog/${params.id}`)
      },
      {
        path:"productDetails/:id",
        element:<ProductCardDetails></ProductCardDetails>,
        loader:({params})=> fetch(`${process.env.REACT_APP_API_URL}/products/${params.id}`)
      },
    ]
  },
  {
    path:"dashboard",
    element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children:[
      {
        path:"admin_home",
        element:<AdminHome></AdminHome>
      },
      {
        path:"allusers",
        element:<AllUsers />
      },
      {
        path:"my_cart",
        element:<MyCard></MyCard>
      },
      {
        path:"payment",
        element:<Payment></Payment>
      },
      {
        path:"order",
        element:<Order></Order>
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
        path:"product_update/:id",
        element:<ProductUpdate></ProductUpdate>,
        loader:({params})=>fetch(`${process.env.REACT_APP_API_URL}/products/${params.id}`)
      }
    ]
  }
])

export default routes