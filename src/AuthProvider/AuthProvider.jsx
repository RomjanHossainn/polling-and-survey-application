import { createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const axiosPublic = useAxiosPublic();


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

            if(currentUser){
                const email = { email: currentUser?.email };
                axiosPublic.post('/jwt',email)
                .then(res => {
                   if(res.data.token){
                    localStorage.setItem('token',res.data.token)
                    setLoading(false)
                   }
                })
            }else{
                localStorage.removeItem('token');
                setLoading(false)
                // comment 
            }


        })

        return () => {
            unSubsCribe()
        }

    },[axiosPublic])


    const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;