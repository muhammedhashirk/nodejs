const jwt = require('jsonwebtoken');
const HttpStatus = require('http-status-codes');

const config = require('./Config');

module.exports = {
    createToken: (user) => {
        return jwt.sign({user}, config.jwt.secretKey, { expiresIn: config.jwt.expiresIn});
    },
    validateToken: (req, res, next) => {
        const bearerHeader = req.headers["authorization"];
        if(typeof bearerHeader !== 'undefined'){
            const token = bearerHeader.split(" ")[1];
            if (token == null || token == ''){
                res.sendStatus(HttpStatus.UNAUTHORIZED);
            }
            else{
                jwt.verify(token, config.jwt.secretKey, (err,user) => {
                    if(err)
                        res.status(HttpStatus.FORBIDDEN).send(err);
                    else{
                        req.loggedInUser = user;
                        next();
                    }
                });
            }
        }
        else{
            res.sendStatus(HttpStatus.FORBIDDEN);
        }
    }
}