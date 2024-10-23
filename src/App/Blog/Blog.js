import React from 'react';
import { getBlogs } from '../Data/BlogData.js';
import { Link } from 'react-router-dom';
import { BLOG_PATH } from '../Paths';

export function Blog() {
    
    const blogData = getBlogs();

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