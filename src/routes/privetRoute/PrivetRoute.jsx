import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Navigate } from 'react-router-dom';
import Loader from '../../components/shared/loader/Loader';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
  return <Navigate to={'/login'} replace={true}></Navigate>

}

export default PrivetRoute