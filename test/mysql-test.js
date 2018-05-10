/** mysql 模块 */
const mysql = require('mysql')
/** MySql createPool Promise 方式封装 */
const query = require('../lib/mysql')

// 查找用户
// exports.findUserByName = (name) => {
//   let _sql = `select * from user where name="${name}"`
//   return query(_sql)
// }
const testMySql = (sql) => {
  query(sql)
    .then((res, rej) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
const _sql = `select * from user_concise where id=1`;
const sql = 'SELECT 123'
let createTest =
    `create table if not exists test_users_create(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '用户名',
     pass VARCHAR(100) NOT NULL COMMENT '密码',
     avator VARCHAR(100) NOT NULL COMMENT '头像',
     moment VARCHAR(100) NOT NULL COMMENT '注册时间',
     PRIMARY KEY ( id )
    );`
const sql2 =  `SELECT username FROM user`   
testMySql(sql2);

/* const mysqlConnection = mysql.createConnection({
  host      :  config.database.HOST,
  user      :  config.database.USERNAME,
  password  :  config.database.PASSWORD,
  database  :  config.database.DATABASE,
  port      :  config.database.PORT
});

mysqlConnection.connect();

mysqlConnection.query(sql, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
})

mysqlConnection.end(); */