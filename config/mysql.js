/**
 * MySql 配置 
 */
const PORT = 3000;
const MYSQL_PORT = 3306;
const local_config = {
  port: PORT,
  database: {
    DATABASE: 'my_blog',
    USERNAME: 'root',
    PASSWORD: 'root',
    PORT: MYSQL_PORT,
    HOST: 'localhost'
  }
}
const pro_config = {
  port: PORT,
  database: {
    DATABASE: '',
    USERNAME: '',
    PASSWORD: '',
    PORT: MYSQL_PORT,
    HOST: ''
  }
}
const config = local_config

module.exports = config