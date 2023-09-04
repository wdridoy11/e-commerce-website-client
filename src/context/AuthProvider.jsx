import React, { createContext, useContext, useState } from 'react'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  } from 'firebase/auth'
import app from '../utils/firebase/firebase.config';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const [user, setUser] = useState([]);

  // create accout using google
  const createUserUsingGoogle=()=>{
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider)
  }

  // create accout using Github
  const createUserUsingGithub=()=>{
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth,githubProvider)
  }

  
  const userInfo ={
    createUserUsingGoogle,
    createUserUsingGithub
  }

  return (
    <AuthContext.Provider value={userInfo}  >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider