import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";


export const createUser = async(req: Request, res: Response) => {
    const {email, password} = req.body

    try {
        const id: string = generateId()

        if(!email || email.indexOf("@") === -1){
            res.statusCode = 400
            throw new Error('O campo email deve ser preenchido e ele deve conter @ ')
        }

        if(!password || password.length < 6){
            res.statusCode = 400
            throw new Error("O campo password deve ser preenchido e ele deve conter 6 ou mais caracteres")
        }

        await insertUser(id, email, password)

        const token = generateToken({id})

        res.status(200).send({token})

    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}