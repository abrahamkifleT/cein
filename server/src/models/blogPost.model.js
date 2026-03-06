import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        content: {
            type: String,
            required: true
        },

        excerpt: {
            type: String,
            default: ""
        },

        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false
        },

        category: {
            type: String
        },

        tags: [
            {
                type: String
            }
        ],

        featuredImage: {
            type: String
        },

        relatedProducts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
        ],

        isPublished: {
            type: Boolean,
            default: false
        },

        publishedAt: {
            type: Date
        },

        views: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const BlogPost =
    mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;