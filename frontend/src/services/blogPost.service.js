import blog from "../data/blogPost";


export const getAllBlogPosts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(blog);
        }, 500);
    });
}

export const getBlogPostById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(blog.find((blog) => blog._id === id));
        }, 500);
    });
}

export const getBlogPostBySlug = (slug) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(blog.find((blog) => blog.slug === slug));
        }, 500);
    });
}
