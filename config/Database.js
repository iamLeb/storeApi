const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(`Error Connecting to Database`));

module.exports = connect;