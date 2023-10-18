import React, { useContext } from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {refetch, data: products = []} = useQuery({
        queryKey:["products", user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure(`/products`)
            return res.data;
        }
    })
  return [products, refetch]
}

export default useProducts