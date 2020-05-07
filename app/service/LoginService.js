const userRepo = require('../repository/UserRepository');
const {createToken} = require('../config/Jwt');
const Response = require('../model/ResponseModel');

exports.authenticate = async (req, res) => {
    try{
        var user = await userRepo.findByUsernameAndPassword(req.body.username, req.body.password);
        if (user && user != ''){
            res.send(Response.success({
                user : user[0],
                token : createToken(user[0])
            }));
        }
        else{
            res.status(400).send(Response.failure("Username or password is incorrect"));
        }
    }
    catch(err){
        res.status(500).send(Response.failure(err.message || "Internal server error."));
    }
};
