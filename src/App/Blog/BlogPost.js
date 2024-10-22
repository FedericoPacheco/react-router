import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "./BlogData";
import { NotFound } from "../NotFound/NotFound";

export function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const blog = blogData.find(b => b.slug === slug);

    if (blog) {
        return (
            <>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <p>{blog.content}</p>
                {/* Return to previous page i.e. Blog */}
                <button onClick = {() => navigate(-1)}>Return to Blog</button>
            </>
        );
    } else {
        return (
            <>
                <NotFound/>
                {/* Return to previous page i.e. Blog */}
                <button onClick = {() => navigate(-1)}>Return to Blog</button>
            </>
        );
    }

    
}