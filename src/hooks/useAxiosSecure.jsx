import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const useAxiosSecure = () => {
  const {logOut} = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`, 
  });

  useEffect(()=>{
    axiosSecure.interceptors.request.use((config)=>{
      const token = localStorage.getItem(`access_token`);
      if(token){
        config.headers.Authorization =`Bearer ${token}`
      }
      return config;
    });

    axiosSecure.interceptors.response.use((response)=>response,async(error)=>{
      if(error.response && (error.response.status === 401 || error.response.status === 403)){
          await logOut();
          navigate("/login")
      }
      return Promise.reject(error)
    })
  },[logOut,navigate])

  return [axiosSecure];
};

export default useAxiosSecure;
