import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    color: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    sku: {
        type: String,
        unique: true,
    }
}, { timestamps: true })

const Variant = mongoose.models.Variant || mongoose.model("Variant", variantSchema);

export default Variant;
