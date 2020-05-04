const jwt = require('jsonwebtoken');
const secretKey = 'th3r1gy53cr3tpa55w0rd';
const expiresIn = '1800s';

module.exports = {
    createToken: function(user) {
        return jwt.sign({user}, secretKey, { expiresIn: expiresIn});
    },
    validateToken: function (req, res, next){
        const bearerHeader = req.headers["authorization"];
        if(typeof bearerHeader !== 'undefined'){
            const token = bearerHeader.split(" ")[1];
            if (token == null){
                return res.sendStatus(401);
            }
            else{
                jwt.verify(token, secretKey, (err,user) => {
                    if(err)
                        res.status(403).send(err);
                    else{
                        req.user = user;
                        next();
                    }
                });
            }
        }
        else{
            res.sendStatus(403)
        }
    }
}