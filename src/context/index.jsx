import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import auth from '../firebaseConfig'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null)


export default function AuthState({children}){
    const [registerFormData, setRegisterFormData] = useState({
        name : '',
        email: '',
        password: '',
    })

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    })

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    function registerWithFirebase(){
        setLoading(true);
        const {email, password} = registerFormData;
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function loginWithFirebase(){
        setLoading(true)
        const {email, password} = loginFormData;
        return signInWithEmailAndPassword(auth, email, password)
    }

    function handleLogout() {
        return signOut(auth)
    }

    useEffect(() => {
        const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            checkAuthState();
        }
    },[])

    useEffect(() => {
        if (user) navigate("/profile")
    }, [user])

    if (loading) return <h1 className="h-screen flex items-center justify-center text-3xl">Loading! please wait</h1>

    
    return (
        <AuthContext.Provider value={{
            registerFormData, 
            setRegisterFormData, 
            registerWithFirebase, 
            user, 
            loading,
            loginFormData,
            setLoginFormData,
            loginWithFirebase,
            handleLogout,
            setLoading,
            }}>
            {children}
        </AuthContext.Provider>
    )
}