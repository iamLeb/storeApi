const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(`Error Connecting to Database`));

module.exports = connect;