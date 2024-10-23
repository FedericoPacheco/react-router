import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { deleteBlog, findBlog } from "../Data/BlogData";
import { NotFound } from "../NotFound/NotFound";
import { BLOG_PATH, EDIT_BLOG_PATH } from "../Paths";
import { Permissions } from "../Auth/Permissions";

export function BlogPost() {
    const auth = useAuth();
    const navigate = useNavigate();
    const { slug } = useParams();
    const blog = findBlog(slug);

    const canDelete = Permissions.Blog.canDelete(auth, slug);
    const onDelete = () => {
        deleteBlog(slug);
        navigate(BLOG_PATH);
    };

    const canEdit = Permissions.Blog.canEdit(auth, slug);
    const onEdit = () => {
        navigate(`${EDIT_BLOG_PATH}/${slug}`); 
    };

    if (blog) {
        return (
            <>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <p>{blog.content}</p>
                <button onClick = {() => navigate(BLOG_PATH)}>Go back</button>
                {canDelete && <button onClick = {() => onDelete(slug)}>Delete</button>}
                {canEdit && <button onClick = {onEdit}>Edit</button>}
            </>
        );
    } else {
        return (
            <>
                <NotFound/>
                <button onClick = {() => navigate(BLOG_PATH)}>Go back</button>
            </>
        );
    }  
}