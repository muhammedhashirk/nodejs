const connectionPool = require('../config/TransactionManager');

class InfoRepository {

  static findAll(){
    return new Promise(function(resolve, reject){
      const sql = "select * from info";
      connectionPool.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  static findByCode(code){
    return new Promise(function(resolve, reject){
      const sql = "select * from info where code = ?";
      connectionPool.query(sql, [code], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = InfoRepository;