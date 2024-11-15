const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    storeId: {
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    quantity_in_stock: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;