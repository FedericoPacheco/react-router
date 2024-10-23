import { findBlog } from "../Data/BlogData";
import { ADMIN, EDITOR } from "./Roles";

class BlogPermissions {
    
    static canDelete(auth, blogSlug) {
        const blog = findBlog(blogSlug);
        return auth.role === ADMIN || auth.user === blog.author;
    }

    static canEdit(auth, blogSlug) {
        return BlogPermissions.canDelete(auth, blogSlug) || auth.role === EDITOR;
    }
}

export const Permissions = {
    Blog: BlogPermissions,
};