class ResponseHelper {
    successResponse = async (res, data, message = 'Success', statusCode = 200) => {
        return res.status(statusCode).json({
            status: 'success',
            message,
            data
        });
    }

    errorResponse = async (res, error, message = 'Error', statusCode = 500) => {
        if (res.headersSent) return;
        return res.status(statusCode).json({
            status: 'error',
            message,
            error
        });
    }
}

const responseHelper = new ResponseHelper();

module.exports = responseHelper;