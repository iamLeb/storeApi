const validator = require('validator');
const { responseHelper } = require('../utils');
const res = require("express/lib/response");


class Validation {
    isEmpty = async (res, data) => {
        const keys = Object.keys(data);
        for (let key of keys) {
            if (validator.isEmpty(data[key])) {
                await responseHelper.errorResponse(res, null, `All fields are required`, 400);
                return false;
            }
        }
        return true;
    }

    verifyEmail = async (email) => {
        if (!await validator.isEmail(email)) {
            throw new Error('Email address is invalid');
        }
    }
}

const validation = new Validation();
module.exports = validation;