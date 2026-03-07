import { createContext, useState, useEffect } from "react";
import { getAllBlogPosts } from "../services/blogPost.service";

export const BlogPostContext = createContext();

export const BlogPostProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = getAllBlogPosts();
        setBlogPosts(data);
        setLoading(false);
    }, []);

    return (
        <BlogPostContext.Provider value={{ blogPosts, loading }}>
            {children}
        </BlogPostContext.Provider>
    );
};

export default BlogPostContext;