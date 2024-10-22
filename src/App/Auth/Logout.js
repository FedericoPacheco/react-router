import { Navigate } from "react-router-dom";
import { LOGIN_PATH } from "./Login";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

export const LOGOUT_PATH = "/logout";

export function Logout() {
    const auth = useAuth();
    useEffect(() => {
        if (auth.user) { 
            auth.logout(); 
        }
    }, [auth]);
    return <Navigate to = {LOGIN_PATH}/>
}