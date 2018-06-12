const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        default: 'Unknown',
        enum: [
            'home',
            'tech',
            'entertainment',
            'kids'
        ]
    },
    stock: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: false
    }
})

productSchema.plugin(mongoosePaginate);

const Product = mongoose.model('Product',productSchema);

module.exports = Product;