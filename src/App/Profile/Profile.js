import { useAuth } from "../Auth/AuthContext";

export const PROFILE_PATH = "/profile";

export function Profile() {
    const auth = useAuth();

    return (
        <p>{`Hi ${auth.user}! Nice to see you here.`}</p>
    );
}