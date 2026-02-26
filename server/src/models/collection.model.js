import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["featured", "seasonal", "custom"],
        default: "custom"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

const Collection = mongoose.models.Collection || mongoose.model("Collection", collectionSchema);

export default Collection;



