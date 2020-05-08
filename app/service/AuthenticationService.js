const HttpStatus = require('http-status-codes');

const userRepo = require('../repository/UserRepository');
const {createToken} = require('../config/Jwt');
const Response = require('../model/ResponseModel');

exports.authenticate = async (request, response) => {
    try{
        const {username, password} = request.body;
        const message = validateCredentials(username, password);
        if(message == null){
            let user = await userRepo.findByUsernameAndPassword(username, password);
            if (user){
                responseObj = {
                    user : {
                        name : user.name,
                        email : user.email
                    },
                    token : createToken({
                        id : user.id,
                        name : user.name,
                        email : user.email
                    })
                }
                response.send(Response.success(responseObj));
            }
            else{
                response
                .status(HttpStatus.BAD_REQUEST)
                .send(Response.failure("The email or password you have entered is invalid. Your account will be locked after 3 failed attempts."));
            }
        }
        else{
            response.status(HttpStatus.BAD_REQUEST).send(Response.failure(message));  
        }
    }
    catch(err){
        response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send(Response.failure(err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)));
    }
};

function validateCredentials(username, password){
    if(password.length < 5)
        return "Length of password should not be less than 5";
    return null;
}
exports.forgotPassword = async  (request, response) => {
    const {email} = request.body;
    let user = await userRepo.findByEmail(email);
    if (user){
        response.send(Response.success({message:"An email has been sent to " + user.email + " with further instructions"}));
    }
    else{
        response
        .status(HttpStatus.BAD_REQUEST)
        .send(Response.failure("Email entered is invalid"));
    }

    
}