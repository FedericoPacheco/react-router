import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "./UserData";
import { LOGIN_PATH } from "../Menu/Menu";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (user, pass) => {
        const authRow = userData.find(r => r.user === user);
        if (authRow) {
            if (authRow.pass === pass) {    
                setUser(user);
                console.log(`The user ${user} logged in`);
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        } 
    }
    const logout = () => {
        setUser(null);
        navigate(LOGIN_PATH);
    }
    
    return (
        <AuthContext.Provider value = {{
            user,
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