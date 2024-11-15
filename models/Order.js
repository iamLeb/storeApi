const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    storeID: {
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'delivered', 'cancelled'],
        default: 'pending',
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;