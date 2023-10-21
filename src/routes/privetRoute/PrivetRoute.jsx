import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/shared/loader/Loader';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
  return <Navigate to={'/login'} replace></Navigate>
}

export default PrivetRoute