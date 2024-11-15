const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    driverId: {
        type: Schema.Types.ObjectId,
        ref: 'Driver',
        required: true
    },
    status: {
        type: String,
        enum: ['assigned', 'in transit', 'delivered'],
        default: 'assigned',
    },
    pickup: {
        type: Date
    },
    dropOff: {
        type: Date
    }
}, { timestamps: true });

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;