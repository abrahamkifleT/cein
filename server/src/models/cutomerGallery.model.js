import mongoose from "mongoose";

const customerGallerySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },

        image: {
            type: String,
            required: true
        },

        caption: {
            type: String,
            trim: true
        },

        isApproved: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const CustomerGallery =
    mongoose.models.CustomerGallery ||
    mongoose.model("CustomerGallery", customerGallerySchema);

export default CustomerGallery;