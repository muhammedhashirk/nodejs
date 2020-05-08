const connectionPool = require('../config/TransactionManager');

exports.findByUsernameAndPassword = (username, password) => {
  return new Promise(function(resolve, reject){
    const sql = "select * from user where email = ? and password = ?";
    connectionPool.query(sql,[username,password], (err, result) => {
      if (err) 
        reject(err);
      else if (result && result.length > 0)
        resolve(result[0]);
      else
        resolve(null);
    });
  });
};

exports.findByEmail = (email)=> {
  return new Promise(function(resolve, reject){
    const sql = "select email from user where email = ?";
    connectionPool.query(sql,[email], (err, result) => {
      if (err)
        reject(err)
      else if (result && result.length > 0)
      resolve(result[0]);
      else 
      resolve(null);
    })
  });
}