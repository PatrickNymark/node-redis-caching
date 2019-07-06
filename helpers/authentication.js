const expressJwt = require('express-jwt');

module.exports = authorize;

function authorize() {
    return [
        // authenticate JWT token and attach user to request object (req.user)
        // if the JWT has an expiration (exp), it will be checked
        expressJwt({ secret: process.env.SECRET_OR_KEY }),

        // authorize based on user 
        (req, res, next) => {
            if(!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            return next();
        }
    ];
}