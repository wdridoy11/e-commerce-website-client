import React, { createContext } from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import app from '../utils/firebase/firebase.config';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const auth = getAuth(app);

  const createUserUsingGoogle=()=>{
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider)
  }


  const userInfo ={
    createUserUsingGoogle
  }

  return (
    <AuthContext.Provider value={userInfo}  >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider