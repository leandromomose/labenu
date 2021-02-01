import express, { Express } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createUser } from "./endpoints/createUser";
import { login } from "./endpoints/login";
import { getOwnProfile } from "./endpoints/getOwnProfile";
import { getOtherUserProfile } from "./endpoints/getOtherUserProfile";
import { createRecipe } from "./endpoints/createRecipe";
import { getRecipeById } from "./endpoints/getRecipeById";


dotenv.config()

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

const app: Express = express()
app.use(express.json())
app.use(cors())


app.post("/signup", createUser)
app.post("/login", login)
app.post("/recipe", createRecipe)

app.get("/user/profile", getOwnProfile)
app.get("/user/:id", getOtherUserProfile)
app.get("/recipe/:id", getRecipeById)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})