import express, { Request, Response } from 'express';
import cors from 'cors';
import {countries, country} from './countries'

const app = express()

app.use(express.json())
app.use(cors())

app.put("/countries/edit/:id", (req: Request, res: Response) => {

    const result = countries.findIndex((country) => country.id === Number(req.params.id))

    countries[result].name = req.body.name
    countries[result].capital = req.body.capital

    if (result) {
        res.status(200).send(req.body)
    } else {
        res.status(404).send("Not found")
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})