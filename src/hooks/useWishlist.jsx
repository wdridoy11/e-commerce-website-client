import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useQuery } from '@tanstack/react-query';

const useWishlist = () => {
    const {user, loading} = useContext(AuthContext);
    const {refetch, data: wishlist =[], isLoading } = useQuery({
        queryKey:["wishlist", user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await fetch(`${process.env.REACT_APP_API_URL}/wishlist?email=${user?.email}`)
            return res.json();
        }
    })
    return [wishlist,refetch,isLoading]
}

export default useWishlist