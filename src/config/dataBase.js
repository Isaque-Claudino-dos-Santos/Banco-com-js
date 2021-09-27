const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
  }
);

try {
  sequelize.authenticate();
  console.log("Conexão OK");
} catch (error) {
  console.log("Erro Conexão", error);
}

console.log(Sequelize);
