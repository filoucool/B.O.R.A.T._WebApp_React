module.exports = {
  HOST: "sql5.freemysqlhosting.net",
  USER: "sql5461678",
  PASSWORD: "2b6ZiIxIiH",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
