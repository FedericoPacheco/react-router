import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userData } from "../Data/UserData";
import { LOGIN_PATH } from "../Paths";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const navigate = useNavigate();

    const login = (user, pass) => {
        const authRow = userData.find(r => r.user === user);
        if (authRow) {
            if (authRow.pass === pass) {    
                setUser(authRow.user);
                setRole(authRow.role);
                console.log(`The user ${authRow.user} logged in with the role ${authRow.role}`);
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        } 
    }
    const logout = () => {
        console.log(`The user ${user} logged out`);
        setUser(null);
        setRole(null);
        navigate(LOGIN_PATH);
    }
    
    return (
        <AuthContext.Provider value = {{
            user,
            role,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthOnly({children}) {
    
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to = {LOGIN_PATH}/>
    } else {
        return children;
    }
}