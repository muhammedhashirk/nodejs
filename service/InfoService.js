const infoRepo = require('../repository/InfoRepository');

exports.listAllInfo = (req, res) => {
  
};

exports.listAllInfo = (req, res) => {
    infoRepo.findAll((err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Customer."
        });
        else{
            console.log(data);
            res.send(data);
        }
    });
};
