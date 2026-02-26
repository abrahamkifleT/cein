import mongoose from "mongoose"

const catagorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        default: null
    }
}, { timestamps: true })

const Category = mongoose.models.Category || mongoose.model("Category", catagorySchema);

export default Category;


