import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  } from 'firebase/auth'
import app from '../utils/firebase/firebase.config';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

   // create user using email and pasword
   const createUserUsingEmail=(email, passages)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,passages)
   }

  // create accout using google
  const createUserUsingGoogle=()=>{
    setLoading(true)
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider)
  }

  // create accout using Github
  const createUserUsingGithub=()=>{
    setLoading(true)
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth,githubProvider)
  }

  // user login
  const userLogin=(email,passages)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,passages)
  }

  // user logout
  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  } 

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      setLoading(true)
    })
    return ()=>{
      return unSubscribe();
    }
  },[])

  const userInfo ={
    user,
    logOut,
    loading,
    userLogin,
    createUserUsingEmail,
    createUserUsingGoogle,
    createUserUsingGithub,
  }

  return (
    <AuthContext.Provider value={userInfo}  >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider