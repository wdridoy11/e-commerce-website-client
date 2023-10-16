import React, { useEffect, useState } from 'react'
import { FaUser, FaUserAlt } from 'react-icons/fa';

const AllUsers = () => {

    const [user, setUser] = useState();
    useEffect(()=>{
      fetch(`http://localhost:5000/users`)
      .then((res)=>res.json())
      .then((data)=>setUser(data))
      .catch((err)=>console.log(err.message))
    },[])

  return (
    <>
        <div className='w-full px-10'>
            <div className="overflow-x-auto">
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
                  <tr>
                    <th>1</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>Ridoy Sharif</p>
                      <p>developerridoy@gmail.com</p>
                    </td>
                    <td>
                      <p>Admin</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </>
  )
}

export default AllUsers