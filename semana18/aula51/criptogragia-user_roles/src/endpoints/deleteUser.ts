import { Request, Response } from "express";
import { selectUserToDelete } from "../data/selectUserToDelete";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export const deleteUser = async(req: Request, res: Response) => {
    try {
        
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if(tokenData.role !== "ADMIN"){
            res.statusCode = 401
            throw new Error("Somente usuários ADMIN podem acessar este endpoint")
        }

        const id: string = req.params.id 

        await selectUserToDelete(id)

        res.status(200).send("Usuário deletado!")

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}