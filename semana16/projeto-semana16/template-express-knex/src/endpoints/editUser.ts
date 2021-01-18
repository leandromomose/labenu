import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req: Request, res: Response){
    try {
        if(req.body.name === "" || req.body.nickname === "" || req.body.email === ""){
            res.status(400).send({message: "Preencha todos os campos"}) 
            return 
        }
        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({message: "Escolha os dados que deseja alterar"})
            return
        }

        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send("Usuário atualizado com sucesso!")

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}