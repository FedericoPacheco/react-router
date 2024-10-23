import { useState } from 'react';
import { useAuth } from './AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../Paths';

export function Login() {
    const auth = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [wasSuccessful, setWasSuccessful] = useState(true);

    const validate = (e) => {
        e.preventDefault();
        const wasSucessfulAux = auth.login(user, pass);
        setWasSuccessful(wasSucessfulAux);
        if (wasSucessfulAux) {
            navigate(HOME_PATH);
        }
    }

    // i.e. you have to login
    if (!auth.user) {
        return (
            <>
                <h1>Login</h1>
                <form onSubmit = {validate}>
                    <label>User: <input
                        onChange = {(e) => setUser(e.target.value)}
                    /></label>
                    <label>Pass: <input
                        onChange = {(e) => setPass(e.target.value)}
                    /></label>
                    <button type = "submit">Login</button>
                </form>
                {!wasSuccessful && <p>Wrong credentials. Try again.</p>}
            </>
        );
    // i.e. don't login again
    } else {
        return <Navigate to = {HOME_PATH}/>
    }
}