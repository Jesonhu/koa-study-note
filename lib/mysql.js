const mysql = require('mysql');
const SCRIPT_TYPE = 'js';
const config = require(`../config/mysql`);

const pool = mysql.createPool({
  host      :  config.database.HOST,
  user      :  config.database.USERNAME,
  password  :  config.database.PASSWORD,
  database  :  config.database.DATABASE,
  port      :  config.database.PORT
});

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release();
        })
      }
    });
  });
}

module.exports = query