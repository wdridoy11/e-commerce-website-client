import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useQuery } from '@tanstack/react-query';

const useWishlist = () => {
    const {user} = useContext(AuthContext);
    const {refetch, data: wishlist =[] } = useQuery({
        queryKey:["wishlist", user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`)
            return res.json();
        }
    })
    return [wishlist,refetch]
}

export default useWishlist