import React from 'react';
import { useAuth } from '../Auth/AuthContext';
import { NavLink, useLocation } from 'react-router-dom';
import { HOME_PATH, ABOUT_PATH, BLOG_PATH, PROFILE_PATH, LOGIN_PATH, LOGOUT_PATH } from '../Paths';

const routes = [
    {to: HOME_PATH, text: "Home", publicOnly: false, privateOnly: false},
    {to: ABOUT_PATH, text: "About", publicOnly: false, privateOnly: false},
    {to: BLOG_PATH, text: "Blog", publicOnly: false, privateOnly: false},
    {to: PROFILE_PATH, text: "Profile", publicOnly: false, privateOnly: true},
    {to: LOGIN_PATH, text: "Login", publicOnly: true, privateOnly: false},
    {to: LOGOUT_PATH, text: "Logout", publicOnly: false, privateOnly: true},
];

export function Menu() {

    const auth = useAuth();
    const location = useLocation();

    return (
        <nav>
            <ul>
                {routes.map(route => {
                    // Don't show logout if you haven't logged in
                    if (route.privateOnly && !auth.user) { 
                        return null;
                    // Don' show login if you've already logged in
                    } else if (route.publicOnly && auth.user) {
                        return null;
                    } else {
                        return <li key = {route.to}>
                            <NavLink
                                style = {({isActive}) => 
                                    ({color: isActive? "red":"blue"}) 
                                }
                                to = {route.to}
                                state = {{from: location} /* Store the previous page in case the user wants to log in*/}
                            >
                                {route.text}
                            </NavLink>
                        </li>
                    }
                })}
            </ul>
        </nav>
    );
}