import React, { useContext } from 'react'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/AuthProvider'

const useSeller = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isSeller, isLoading: isSellerLoading} = useQuery({
        queryKey:["isSeller", user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app/users/seller/${user?.email}`)
            return res.data.seller;
        }
    })
  return [isSeller, isSellerLoading]
}

export default useSeller