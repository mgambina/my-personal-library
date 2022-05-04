require('dotenv').config();

module.exports = {
  database: {
    name: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOSTNAME,
    port: process.env.DATABASE_PORT
  },
  express: {
    host: process.env.HOST,
    port: process.env.PORT
  },
}
