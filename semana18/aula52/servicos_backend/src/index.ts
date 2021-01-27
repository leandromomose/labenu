import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createUser } from "./endpoints/createUser";
import { login } from "./endpoints/login";
import { getUserById } from "./endpoints/getUserById";
import { deleteUser } from "./endpoints/deleteUser";
import { getInfoUserById } from "./endpoints/getInfoUserById";
import { getAddressInfo } from "./endpoints/getAddressInfo";
import { resetPassword } from "./endpoints/resetPassword";


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

const app = express();
app.use(express.json());


app.post("/signup", createUser)
app.post("/login", login)
app.get("/user/profile", getUserById)
app.delete("/user/:id", deleteUser)
app.get("/user/:id", getInfoUserById)
app.get("/address/:cep", getAddressInfo)
app.post("/user/password/reset", resetPassword)


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});