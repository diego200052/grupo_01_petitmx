module.exports = {
  "development": {
    "username": process.env.DBUSERNAME || "digitalhouse",
    "password": process.env.DBPASSWORD ||"digitalhouse",
    "database": process.env.DBNAME || "petit_db",
    "host": process.env.DBHOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
