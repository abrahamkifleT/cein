const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    salePrice: {
        type: Number,
        required: false,
        default: null,
        min: 0
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId, // Using ObjectId for better querying
        ref: 'Category',
        required: true
    },
    collectionIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection'
    }],
    tags: [String],   // List of strings
    images: [String], // List of image URLs
    isNew: {
        type: Boolean,
        default: false
    },
    isTrending: {
        type: Boolean,
        default: false
    },
    isBestSeller: {
        type: Boolean,
        default: false
    }
}, {
    // This automatically creates 'createdAt' and 'updatedAt' fields
    timestamps: true
});

// Create the model
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
