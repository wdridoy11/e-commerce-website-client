import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isUser, refetch, isLoading:isUserLoading} = useQuery({
        queryKey:["isUser", user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/user/${user?.email}`)
            return res;
        }
    })
  return [isUser, refetch, isUserLoading]
}

export default useUser