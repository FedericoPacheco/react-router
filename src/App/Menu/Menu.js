import React from 'react';
import { NavLink } from 'react-router-dom';

export const HOME_PATH = "/";
export const ABOUT_PATH = "/about";
export const BLOG_PATH = "/blog";
export const LOGIN_PATH = "/login";
export const LOGOUT_PATH = "/logout";

const routes = [
    {to: HOME_PATH, text: "Home"},
    {to: ABOUT_PATH, text: "About"},
    {to: BLOG_PATH, text: "Blog"},
    {to: LOGIN_PATH, text: "Login"},
    {to: LOGOUT_PATH, text: "Logout"},
];

export function Menu() {
    return (
        <nav>
            <ul>
                {routes.map(r => 
                    <li key = {r.to}>
                        <NavLink
                            style = {({isActive}) => 
                                ({color: isActive? "red":"blue"}) 
                            }
                            to = {r.to}
                        >
                            {r.text}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}