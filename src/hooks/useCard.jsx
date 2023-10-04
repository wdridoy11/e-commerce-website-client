import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useCard = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxioSecure();

    const {refetch, data:card=[]} = useQuery({
        queryKey:["carts", user?.email],
        enabled: !loading,
        queryFn:async ()=>{
            const res = await axiosSecure(`http://localhost:5000/carts?email=${user?.email}`)
            return res.data
        }
    })
    return [card, refetch];
}

export default useCard