import blog from "../data/blogPost";


export const getAllBlogPosts = () => {
    return blog;
}

export const getBlogPostById = (id) => {
    return blog.find((blog) => blog._id === id);
}

export const getBlogPostBySlug = (slug) => {
    return blog.find((blog) => blog.slug === slug);
}
