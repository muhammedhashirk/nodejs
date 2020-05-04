const mysqlConnection = require('../config/Transaction');
const Info = require('../model/InfoModel');

exports.findAll = result => {
  mysqlConnection.query("select * from info", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

exports.findByCode = (code, result) => {
  mysqlConnection.query("select * from info where code = ?",[code], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};