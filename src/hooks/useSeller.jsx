import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSeller = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isSeller, isLoading: isSellerLoading} = useQuery({
        queryKey:["isSeller", user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`users/seller/${user?.email}`);
            console.log(res)
        }
    })
  return [isSeller, isSellerLoading]
}

export default useSeller