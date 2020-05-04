const infoRepo = require('../repository/InfoRepository');


exports.listAllInfo = (req, res) => {
    infoRepo.findAll((err, data) => {
        if (err)
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
        else{
            res.send(data);
        }
    });
};

exports.listByCode = (req, res) => {
    infoRepo.findByCode(req.params.code, (err, data) => {
        if (err)
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
        else{
            res.send(data);
        }
    });
};
