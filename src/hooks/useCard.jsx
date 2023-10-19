import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCard = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {refetch, data: card = []} = useQuery({
        queryKey:["carts", user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
  return [card, refetch]
}

export default useCard