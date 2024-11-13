const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const {errorHandler} = require('./middlewares');
require('dotenv').config();
require('./config');

class App {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.middleware();
        this.routes();
        this.start();
    }

    middleware = () => {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());

        this.app.use(cors({
            origin: process.env.CLIENT_ORIGIN_URL || "*",
            credentials: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
        }));
    }

    routes = () => {
        // Server Pinging
        this.app.get('ping', (req, res) => { return res.json('Server is Running')})

        this.app.use('/auth', authRoute); // auth routes

        // user error handling middleware
        this.app.use(errorHandler.handleError);

    }

    start = () => {
        this.app.listen(this.port, () => console.log(`Listening to port ${this.port}`));
    }
}

new App;