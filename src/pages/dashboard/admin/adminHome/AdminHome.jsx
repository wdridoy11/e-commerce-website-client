import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { FaClockRotateLeft, FaUsers } from 'react-icons/fa6';
import { IoIosCart } from 'react-icons/io';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import useUser from '../../../../hooks/useUser';

const AdminHome = () => {

  const [users] = useUser();
  const [allProduct, setAllProduct] = useState([]);

  useEffect(()=>{
    fetch(`https://e-commerce-website-server-r6wa6pfyh-developersridoy-gmailcom.vercel.app/all_product`)
    .then((res)=>res.json())
    .then((data)=>setAllProduct(data))
    .catch((err)=>console.log(err.message))
  },[])

  // product pending and approved filter
  const approvedProduct = allProduct.filter((product)=>product.status === "approved");
  const pendingProduct = allProduct.filter((product)=>product.status === "pending");
  // seller filter
  const seller = users.filter((user)=>user.role === "seller");
  const mobile = approvedProduct.filter((product)=>product.category === "Mobile")
// console.log(mobile.length)
const lengthFind=(category)=>{
  const data = approvedProduct.filter((product)=>product.category === category);
  return data
}
console.log()

  const data = [
    {
      name: "Mobile",
      uv: lengthFind("Mobile").length,
    },
    {
      name: "Laptop",
      uv: lengthFind("Laptop").length,
    },
    {
      name: "AirPods Pro",
      uv: lengthFind("AirPods Pro").length,
    },
    {
      name: "Headphone",
      uv: lengthFind("Headphone").length,
    },
    {
      name: "Ipad",
      uv: lengthFind("Headphone").length,
    },
    {
      name: "Televisions",
      uv: lengthFind("Headphone").length,
    }
  ];

  return (
    <div className='w-full bg-[#F8F8FC] h-screen pt-10 lg:px-10'>
      <div>
        <div>
          <div className='grid grid-cols-4 gap-5'>
              <div className='bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] p-7 rounded-md'>
                  <div className='flex items-center gap-5'>
                      <div>
                          <IoIosCart className='text-5xl text-white'></IoIosCart>
                      </div>
                      <div>
                         <h2 className='text-4xl font-semibold text-white'>{approvedProduct && approvedProduct?.length}</h2>
                         <h3 className='text-xl font-medium text-white'>Approved Products</h3>
                      </div>
                  </div>
              </div>
              <div className=' bg-gradient-to-r from-[#FE4880] to-[#FECDE9] p-7 rounded-md'>
                  <div className='flex items-center gap-5'>
                      <div>
                          <FaClockRotateLeft className='text-5xl text-white'></FaClockRotateLeft>
                      </div>
                      <div>
                         <h2 className='text-4xl font-semibold text-white'>{pendingProduct && pendingProduct?.length}</h2>
                         <h3 className='text-xl font-medium text-white'>Pending Products</h3>
                      </div>
                  </div>
              </div>
              <div className=' bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] p-7 rounded-md'>
                  <div className='flex items-center gap-5'>
                      <div>
                          <FaUsers className='text-5xl text-white'></FaUsers>
                      </div>
                      <div>
                         <h2 className='text-4xl font-semibold text-white'>{users && users?.length}</h2>
                         <h3 className='text-xl font-medium text-white'>All Users</h3>
                      </div>
                  </div>
              </div>
              <div className=' bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] p-7 rounded-md'>
                  <div className='flex items-center gap-5'>
                      <div>
                          <FaUser className='text-5xl text-white'></FaUser>
                      </div>
                      <div>
                         <h2 className='text-4xl font-semibold text-white'>{seller && seller?.length}</h2>
                         <h3 className='text-xl font-medium text-white'>All Seller</h3>
                      </div>
                  </div>
              </div>
          </div>
          <div className='pt-10'>
              <BarChart width={500} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#6AAEFF" />
              </BarChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome