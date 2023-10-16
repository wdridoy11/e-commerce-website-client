import React, { useEffect, useState } from 'react'
import { FaUser, FaUserShield,FaUsers } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';

const AllUsers = () => {

    const [users, setUsers] = useState();
    useEffect(()=>{
      fetch(`http://localhost:5000/users`)
      .then((res)=>res.json())
      .then((data)=>setUsers(data))
      .catch((err)=>console.log(err.message))
    },[])

    const handleMakeAdmin=(user)=>{
      fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:"PATCH",
        headers:{
          "content-type":"application/json"
        }
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
      })
    }

    const handleMakeSeller=()=>{
      console.log("Hello")
    }
    const handleMakeUser=()=>{
      console.log("Hello")
    }



console.log(users)
  return (
    <>
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className="bg-white pb-5">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Info</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                    {users && users?.map((user,index)=><tr>
                      <th>{index+1}</th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className='text-base font-medium'>{user.name}</p>
                        <p className='text-base font-normal'>{user.email}</p>
                      </td>
                      <td>
                        <div className='flex gap-3 items-center'>
                          {
                            user.role === "admin" ? <p className='text-lg font-medium text-green-500'>Admin</p>:<>
                                <button title='Admin' onClick={()=>handleMakeAdmin(user)} className="btn text-lg border-0 bg-orange-400 text-white">
                                    <FaUserShield></FaUserShield>
                                </button>
                            </>
                          }
                          {
                            user.role === "seller" ? <p className='text-lg font-medium text-green-500'>Seller</p>:<>
                                <button title='Seller' onClick={()=>handleMakeSeller(user)} className="btn text-lg border-0 bg-orange-400 text-white">
                                    <TbTruckDelivery></TbTruckDelivery>
                                </button>
                            </>
                          }
                          {
                            user.role === "user" ? <p className='text-lg font-medium text-green-500'>User</p>:<>
                                <button title='User' onClick={()=>handleMakeUser(user)} className="btn text-lg border-0 bg-orange-400 text-white">
                                    <FaUsers></FaUsers>
                                </button>
                            </>
                          }
                        </div>
                      </td>
                  </tr>)}
                </tbody>
              </table>
            </div>
        </div>
    </>
  )
}

export default AllUsers