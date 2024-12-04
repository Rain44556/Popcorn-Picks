import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null);
const providerGoogle = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const signupUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
};

const loginUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logInWithGoogle = ()=>{
    return signInWithPopup(auth,providerGoogle);
}

const updateProfileUser = (updatedData) =>{
return updateProfile(auth.currentUser, updatedData);
}

    const userInfo = {
        user,
        setUser,
        signupUser,
        loginUser,
        loading,
        logInWithGoogle,
        updateProfileUser,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;