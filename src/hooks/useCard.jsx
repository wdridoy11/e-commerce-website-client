import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useQuery } from '@tanstack/react-query';

const useCard = () => {
    const {user} = useContext(AuthContext);
    const {refetch, data: card = []} = useQuery({
        queryKey:["carts", user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        }
    })
  return [card, refetch]
}

export default useCard