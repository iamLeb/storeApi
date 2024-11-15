const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    vehicle: {
        type: String
    },
    availabilityStatus: {
        type: String,
        enum: ['available', 'busy', 'unavailable']
    },
    location_coordinates: {
        type: String,
    }
}, { timestamps: true });

const Driver = mongoose.model('Driver', driverSchema);
module.exports = Driver;