const mysqlConnection = require('../config/Transaction');
const Info = require('../model/InfoModel');

exports.findByUsernameAndPassword = (username, password) => {
  return new Promise(function(resolve, reject){
    const sql = "select username from user where username = ? and password = ?";
    mysqlConnection.query(sql,[username,password], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};