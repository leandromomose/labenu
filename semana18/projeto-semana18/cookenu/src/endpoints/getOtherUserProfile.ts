import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export const getOtherUserProfile = async(req: Request, res: Response) => {
    
    const id: string = req.params.id 
    
    try {
        
        if(!id){
            res.statusCode = 400
            throw new Error("id must be provided and valid")
        }

        const token = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if(!token || !tokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }

        const data = await selectUserById(id)

        if (!data) {
            res.statusCode = 400
            throw new Error('User not found!')
        }

        const user = {
            id: data.id,
            name: data.name,
            email: data.email
        }

        res.status(200).send({user: user})

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}