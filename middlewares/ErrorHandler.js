const { responseHelper } = require('../utils')

class ErrorHandler {
    handleError = async (err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal Server Error';
        return responseHelper.errorResponse(res, err, message, statusCode);
    }
}

const errorHandler = new ErrorHandler();

module.exports = errorHandler;