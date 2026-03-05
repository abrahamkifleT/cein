import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false
        },

        name: {
            type: String,
            required: true
        },

        role: {
            type: String,
            default: "Customer"
        },

        message: {
            type: String,
            required: true
        },

        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },

        image: {
            type: String
        },

        isApproved: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const Testimonial =
    mongoose.models.Testimonial ||
    mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;