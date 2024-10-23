import { findBlog } from "../Data/BlogData";
import { ADMIN, EDITOR } from "../Roles";

export function canDeleteBlog(auth, blogSlug) {
    const blog = findBlog(blogSlug);
    return auth.role === ADMIN || auth.user === blog.author;
}

export function canEditBlog (auth, blogSlug) {
    return canDeleteBlog(auth, blogSlug) || auth.role === EDITOR;
}