import React from 'react'
import { useBlogPost } from '../../../hooks/useBlogPost'
import './SomeBlogPostCard.css'

const SomeBlogPostCard = () => {
    const { blogPosts } = useBlogPost();
    // Display only two blog posts
    const displayPosts = blogPosts && blogPosts.length > 0 ? blogPosts.slice(0, 2) : [];

    return (
        <>
            <br />
            <div className="blog-post-card-container">
                {displayPosts.map((blog, index) => (
                    <div key={blog._id} className="blog-post-card">
                        <h2>{blog.title}</h2>
                        <img className="blog-post-image" src={blog.featuredImage} alt={blog.title} />
                        <p className="blog-post-excerpt">{blog.excerpt}</p>
                        <a href="#" className="blog-post-link">
                            {index === 0 ? 'Read More' : 'Learn More'}
                        </a>
                    </div>
                ))}
            </div>
            <br />
        </>
    )
}

export default SomeBlogPostCard
