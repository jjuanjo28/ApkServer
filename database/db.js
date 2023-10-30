import { Sequelize } from "sequelize";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT
} from "../src/config.js"

console.log("DB_HOST:", DB_HOST)
console.log("DB_NAME:", DB_NAME)
console.log("DB_USER:", DB_USER)
console.log("DB_PORT:", DB_PORT)

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  port: DB_PORT
 });

try {
    await db.authenticate()
    console.log("coneccion exitosa a DB")
} catch (error) {
    console.log(`el error de coneccion es: ${error}`)
}

export default db;
