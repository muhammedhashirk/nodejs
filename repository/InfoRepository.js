const mysqlConnection = require('../config/Transaction');
const Info = require('../model/Info.model');

module.exports.findAll = result => {
    mysqlConnection.query("select * from info", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    });
  };