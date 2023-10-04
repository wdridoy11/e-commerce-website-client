import {useQuery} from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useCard = () => {
    const {user, loading} = useContext(AuthContext);

    const {refetch, data:card=[]} = useQuery({
        queryKey:["carts", user?.email],
        enabled: !loading,
        queryFn:async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
        }
    })
    return [card, refetch];
}

export default useCard