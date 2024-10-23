import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { editBlog, findBlog } from "../Data/BlogData";
import { useState } from "react";
import { BLOG_PATH } from "../Paths";
import { canEditBlog } from "./BlogPermissions";

export function EditBlogPost() {
    const auth = useAuth();
    const navigate = useNavigate();
    const { slug } = useParams();
    const blog = findBlog(slug);
    const [title, setTitle] = useState(blog.title);
    const [content, setContent] = useState(blog.content);

    const onSave = (e) => {
        e.preventDefault();
        editBlog(slug, title, content);
        navigate(`${BLOG_PATH}/${slug}`);
    };

    const canEdit = canEditBlog(auth, slug);
    if (canEdit) {
        return (
            <>
                <form onSubmit={(e) => onSave(e)}>
                    <label>Title: <input value = {title} onChange = {(e) => setTitle(e.target.value)}/></label>
                    <label>Content: <input value = {content} onChange = {(e) => setContent(e.target.value)}/></label>
                    <button type = "submit">Save</button>
                </form>
            </>
        );
    } else {
        return <Navigate to = {BLOG_PATH}/>;
    }
}