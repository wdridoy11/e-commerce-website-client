import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  getAuth,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  } from 'firebase/auth'
import app from '../utils/firebase/firebase.config';
import ProductSearch from '../components/shared/search/ProductSearch';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // user product search value
  const [searchValue, setSearchValue] = useState();
  // shop page price log log to High
  const [sortByPrice, setSortByPrice] = useState([]);

   // create user using email and pasword
   const createUserUsingEmail=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }

  // create accout using google
  const createUserUsingGoogle=()=>{
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider);
  }

  // create accout using Github
  const createUserUsingGithub=()=>{
    setLoading(true);
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth,githubProvider);
  }

  // user login
  const userLogin=(email,passages)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,passages);
  }

  // user profile update using name and photo
  const userProfileUpdate =(name,photo)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:photo
    })
  }

  // user logout
  const logOut=()=>{
    setLoading(true);
    return signOut(auth);
  } 

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      setLoading(false);
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
    searchValue,
    setSearchValue,
    sortByPrice,
    setSortByPrice,
    userProfileUpdate,
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