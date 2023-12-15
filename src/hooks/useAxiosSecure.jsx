import React from 'react';
import axios from 'axios';

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`, 
  });

  return [axiosSecure];
};

export default useAxiosSecure;
