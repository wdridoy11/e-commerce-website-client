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
  Legend,
  PieChart, Pie, Cell
} from "recharts";

import useUser from '../../../../hooks/useUser';
import useCategory from '../../../../hooks/useCategory';
import Loader from '../../../../components/shared/loader/Loader';

const AdminHome = () => {

  const [users] = useUser();
  const [loading, setLoading] = useState(true);
  const [allProduct, setAllProduct] = useState([]);
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/all_product`)
    .then((res)=>res.json())
    .then((data)=>{
      setAllProduct(data)
      setLoading(false)
    })
    .catch((err)=>console.log(err.message))
  },[])

  // product pending and approved filter
  const approvedProduct = allProduct.filter((product)=>product.status === "approved");
  const pendingProduct = allProduct.filter((product)=>product.status === "pending");
  // seller filter
  const seller = users.filter((user)=>user.role === "seller");
  // console.log(mobile.length)
  const lengthFind=(category)=>{
    const data = approvedProduct.filter((product)=>product.category === category);
    return data
  }

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

  const COLORS = ["#00C49F","#BB34F5", "#FFBB28", "#FF8042", "#0088FE"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

const findCategoryLength = (name)=>{
  const result = approvedProduct.filter((product)=>product.category === name);
  return result.length;
}

const [categoryName] = useCategory();
const categoryObjects = categoryName.map((name) => ({ name: name, value: findCategoryLength(name)}));
console.log(categoryObjects);

  return (
    <>
      {loading ? <Loader></Loader> : <div className='w-full bg-[#F8F8FC] h-screen pt-10 lg:px-10'>
          <div>
            <div>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
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
              <div className='grid grid-cols-2 gap-10 items-center mt-10 bg-white'>
                  <div className='pt-10'>
                      {/* <BarChart width={500} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" fill="#6AAEFF" />
                      </BarChart> */}
                  </div>
                  <div className='mx-auto'>
                      <PieChart width={500} height={500}>
                          <Pie
                             data={categoryObjects}
                             cx={200}
                             cy={220}
                             labelLine={false}
                             label={renderCustomizedLabel}
                             outerRadius={200}
                             fill="#8884d8"
                             dataKey="value">
                            {data.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                         <Tooltip />
                         <Legend />
                      </PieChart>
                  </div>
              </div> 
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default AdminHome