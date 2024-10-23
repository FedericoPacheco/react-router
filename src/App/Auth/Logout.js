import { Navigate } from "react-router-dom";
import { LOGIN_PATH } from "../Paths";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

export function Logout() {
    const auth = useAuth();
    useEffect(() => {
        if (auth.user) { 
            auth.logout(); 
        }
    }, [auth]);
    return <Navigate to = {LOGIN_PATH}/>
}