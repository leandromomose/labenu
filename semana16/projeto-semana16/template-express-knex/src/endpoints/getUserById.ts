import { Request, Response } from "express";
import findUserById from "../data/findUserById";

export default async function getUserById(req: Request, res: Response){
    try {
        const user = await findUserById(req.params.id)

        if(!user){
            res.status(404).send("Usuário não encontrado")
            return
        }

        res.status(200).send({id: user.id, nickname: user.nickname})

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}