import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export const getOwnProfile = async(req: Request, res: Response) => {
    try {
        
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if(!token || !tokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }

        const data = await selectUserById(tokenData.id)

        if(!data){
            res.statusCode = 400
            throw new Error("User not found")
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