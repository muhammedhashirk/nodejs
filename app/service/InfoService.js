const infoRepo = require('../repository/InfoRepository');
const Response = require('../model/ResponseModel');

exports.listAllInfo = async (req, res) => {
    try{
        var info = await infoRepo.findAll();
        res.send(Response.success(info));
    }
    catch(err){
        res.status(500).send(Response.failure(err.message || "Internal server error."));
    }
};

exports.listByCode = async (req, res) => {
    try{
        var info = await infoRepo.findByCode(req.params.code);
        res.send(Response.success(info));
    }
    catch(err){
        res.status(500).send(Response.failure(err.message || "Internal server error."));
    }
};
