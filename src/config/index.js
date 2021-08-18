const dotenv = require("dotenv");

dotenv.config();

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  server: {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  },
  database: {
    host: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};
