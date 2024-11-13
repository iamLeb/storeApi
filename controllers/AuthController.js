const { validation } = require('../middlewares');
class AuthController {
    register = async (req, res, next) => {
        try {
            // validate inputs
            await validation.isEmpty(res, req.body);
            await validation.verifyEmail(req.body.email);

            // check if email already exists

            return res.json('ok!')
        } catch (e) {
            next(e); // throw error if any...
        }
    }

    login = async (req, res, next) => {
        return res.json('Login controller');
    }
}

// create an instance of the controller
const authController = new AuthController();

module.exports = authController;