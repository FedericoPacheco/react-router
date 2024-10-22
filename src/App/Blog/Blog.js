import React from 'react';
import { blogData } from './BlogData';
import { Link } from 'react-router-dom';

export const BLOG_PATH = "/blog";

export function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <ul>
                {blogData.map(b => 
                    <li key = {b.slug}>
                        <Link to={`${BLOG_PATH}/${b.slug}`}><h2>{b.title}</h2></Link>
                    </li>
                )}
            </ul>
        </>
    );
}