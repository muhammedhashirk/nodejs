const HttpStatus = require('http-status-codes');

const infoRepo = require('../repository/InfoRepository');
const Response = require('../model/ResponseModel');

exports.listAllInfo = async (request, response) => {
    try{
        let info = await infoRepo.findAll();
        response.send(Response.success(info));
    }
    catch(err){
        response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send(Response.failure(err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)));
    }
};

exports.listByCode = async (request, response) => {
    try{
        let info = await infoRepo.findByCode(request.params.code);
        response.send(Response.success(info));
    }
    catch(err){
        response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send(Response.failure(err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)));
    }
};
