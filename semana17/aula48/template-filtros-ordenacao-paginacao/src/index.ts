import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getOrderBy } from "./endpoints/getOrderBy";
import { getLimitUsers } from "./endpoints/getLimitUsers";
import { getUsersByDefault } from "./endpoints/getUsersByDefault";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

app.get("/users/all", getAllUsers)
app.get("/users/search", getUserByName)
app.get("/users/search/:type", getUserByType)
app.get("/users/orderBy", getOrderBy)
app.get("/users/limit", getLimitUsers)
app.get("/users", getUsersByDefault)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});