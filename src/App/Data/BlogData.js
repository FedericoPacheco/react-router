export let blogData = [
    {
        title: "Title 1",
        author: "federicop",
        slug: "post-1",
        content: "Content 1"
    },
    {
        title: "Title 2",
        author: "gaspar",
        slug: "post-2",
        content: "Content 2"
    },
    {  
        title: "Title 3",
        author: "fidel",
        slug: "post-3",
        content: "Content 3"
    },
    {  
        title: "Title 4",
        author: "franco",
        slug: "post-4",
        content: "Content 4"
    },
];

export function deleteBlog(blogSlug) {
    blogData = blogData.filter(b => b.slug !== blogSlug); 
}

export function findBlog(blogSlug) {
    return blogData.find(b => b.slug === blogSlug);
}

export function editBlog(blogSlug,  title, content) {
    const blog = findBlog(blogSlug);
    blog.title = title;
    blog.content = content;
}

export function getBlogs() {
    return blogData;
}