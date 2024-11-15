const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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
    address: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;