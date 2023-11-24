import { createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)


    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubsCribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })

        return () => {
            unSubsCribe()
        }

    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;