import express, { Request, Response } from "express";
import cors from "cors";
import {countries} from "./countries";

const app = express()

app.use(express.json())
app.use(cors())


app.get("/test", (req: Request, res: Response) => {

    res.send(countries)
})

app.post("/person/:cabelo", (req: Request, res: Response) => {

    const senha: string = req.headers.senha as string
    const nome: string = req.body.nome
    const idade: string = req.query.idade as string
    const cabelo: string = req.params.cabelo

    res.status(200).send(`Olá, ${nome}! Sua senha é: ${senha}. Você tem ${idade} anos. Seu cabelo é ${cabelo}`)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})