import React from 'react';
import { blogData } from './BlogData';
import { BLOG_PATH } from '../Menu/Menu';
import { Link } from 'react-router-dom';

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