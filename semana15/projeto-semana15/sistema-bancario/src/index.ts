import express, {Express, request, Request, Response} from "express"
import cors from "cors"
import {accounts} from "./accounts"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req: Request, res: Response) => {
    try {
        
        const {name, CPF, DOBString} = req.body

        const [day, month, year] = DOBString.split("/")

        const DOB: Date = new Date(`${year}-${month}-${day}`)

        const validAgeInMilisseconds: number = Date.now() - DOB.getTime()

        const validAgeInYears: number = validAgeInMilisseconds / 1000 / 60 / 60 / 24 / 365

        if (validAgeInYears < 18) {
            res.statusCode = 400
            throw new Error("Idade deve ser maior que 18 anos.")
        }

        accounts.push({
            name,
            CPF,
            DOB,
            balance: 0,
            statement: []
        })

        res.status(201).send("Conta criada com sucesso!")

    } catch (error) {
        
        res.send(error.message)

    }
})

app.get("/users/all", (req: Request, res: Response) => {

    try {

        if(!accounts.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta foi encontrada.")
        }
        
        res.status(200).send(accounts)

    } catch (error) {
      
        res.send(error.message)

    }
}) 

app.listen(3003, () => {
    console.log("Servidor rodando na porta: 3003")
})