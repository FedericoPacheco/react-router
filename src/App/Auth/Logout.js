import { useAuth } from "./AuthContext";

export function Logout() {
    const auth = useAuth();

    return (
        <p>{`The user ${auth} succesfully}`}</p>
    );
}