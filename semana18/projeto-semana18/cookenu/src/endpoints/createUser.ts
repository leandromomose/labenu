import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { generateHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { user } from "../types/user";

export const createUser = async(req: Request, res: Response) => {

    const { name, email, password } = req.body 

    try {
        
        const id: string = generateId()

        if(!name || !email || !password){
            res.statusCode = 422
            throw new Error('Field "name", "email" and "password" must be provided')
        }

        if(email.indexOf("@") === -1){
            res.statusCode = 400
            throw new Error('The field "email" must contain an @ character')
        }

        if(password.length < 6){
            res.statusCode = 400
            throw new Error('The field "password" must contain 6 or more characters')
        }

        const cypherPassword: string = await generateHash(password)

        const newUser: user = {
            id: id,
            name: name,
            email: email,
            password: cypherPassword
        }

        await insertUser(newUser)

        const token = generateToken({id})

        res.status(200).send({token})

    } catch (error) {
        
        res.send({message: error.message || error.sqlMessage})

    }
}