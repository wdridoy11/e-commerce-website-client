import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useQuery } from '@tanstack/react-query';

const useWishlist = () => {
    const {user, loading} = useContext(AuthContext);
    const {refetch, data: wishlist =[] } = useQuery({
        queryKey:["wishlist", user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await fetch(`https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app/wishlist?email=${user?.email}`)
            return res.json();
        }
    })
    return [wishlist,refetch]
}

export default useWishlist