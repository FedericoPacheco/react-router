import { useAuth } from "../Auth/AuthContext";

export function Profile() {
    const auth = useAuth();

    return (
        <p>{`Hi ${auth.user}! Nice to see you here.`}</p>
    );
}