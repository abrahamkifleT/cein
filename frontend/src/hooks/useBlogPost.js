import { useContext } from "react";
import BlogPostContext from "../context/blogpost.context";

export const useBlogPost = () => {
    return useContext(BlogPostContext);
}