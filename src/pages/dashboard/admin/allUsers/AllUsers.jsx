import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { TbTruckDelivery } from 'react-icons/tb';
import {FaUserShield,FaUsers } from 'react-icons/fa';
import Loader from '../../../../components/shared/loader/Loader';

const AllUsers = () => {

    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);
    // user data load from server
    useEffect(()=>{
      fetch(`${process.env.REACT_APP_API_URL}/users`)
      .then((res)=>res.json())
      .then((data)=>{
        setUsers(data)
        setLoading(false)
      })
      .catch((err)=>console.log(err.message))
    },[users])

    // Handle role change function when function call receive 3 parameter user, role and API path
    const userRoleChange= (user, role, apiPath) =>{
      Swal.fire({
        title: 'Are you sure?',
        text: `${user?.name} ${role}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`${process.env.REACT_APP_API_URL}/users/${apiPath}/${user._id}`,{
            method:"PATCH",
            headers:{
              "content-type":"application/json"
            }
          })
          .then((res)=>res.json())
          .then((data)=>{
            setUsers(users);
            Swal.fire(
              'Congratulation!',
              `Now ${user?.name} is a ${role}`,
              'success'
            )
          })
        }
      })
    }

    // make admin handler
    const handleMakeAdmin=(user)=>{
      userRoleChange(user,"Admin","admin");
    }

    // make seller handler
    const handleMakeSeller=(user)=>{
      userRoleChange(user,"Seller","seller")
    }

    // make user handler
    const handleMakeUser=(user)=>{
      userRoleChange(user,"User","user")
    }

  return (
    <>
    {loading ? <Loader></Loader>:
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
                    {users && users?.map((user,index)=><tr key={index}>
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
        }
    </>
  )
}

export default AllUsers