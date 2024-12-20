import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context";



function AuthPage({children}){

    const {user, loading} = useContext(AuthContext)

    if (loading) return <h1 className="h-screen flex items-center justify-center text-3xl">Loading! please wait</h1>

    if (user) return children;

    return <Navigate to={'/login'} />
}

export default AuthPage;