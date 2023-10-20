import React from 'react';
import axios from 'axios';

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: 'https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app', 
  });

  return [axiosSecure];
};

export default useAxiosSecure;
