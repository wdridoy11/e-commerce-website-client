import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: users = [], isLoading:isUserLoading } = useQuery({
        queryKey:["users", user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
  return [users, refetch, isUserLoading]
}

export default useUser