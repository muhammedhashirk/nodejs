const mysqlConnection = require('../config/Transaction');
const Info = require('../model/InfoModel');

exports.findAll = () => {
  return new Promise(function(resolve, reject){
    const sql = "select * from info";
    mysqlConnection.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

exports.findByCode = (code) => {
  return new Promise(function(resolve, reject){
    const sql = "select * from info where code = ?";
    mysqlConnection.query(sql, [code], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};