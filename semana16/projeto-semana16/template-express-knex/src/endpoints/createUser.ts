import { Request, Response } from "express";
import addUser from "../data/addUser";

export default async function createUser(req: Request, res: Response){
    try {
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            res.status(400).send("Todos os campos precisam ser preenchidos")
            return
        }

        const id = Date.now().toString()

        await addUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send("Usuário criado com sucesso!")

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}