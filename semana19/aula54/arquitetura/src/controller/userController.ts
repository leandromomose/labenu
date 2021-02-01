import { Request, Response } from "express";
import { businessDeleteUser, businessGetAllUsers, businessLogin, businessSignup } from "../business/userBusiness";


export const login = async (req: Request, res: Response) => {

    try {

        const { email, password } = req.body

        const token = await businessLogin(email, password)

        res.status(200).send({token})

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}

export const signup = async(req: Request, res: Response) => {

    try {
        
        const { name, email, password, role } = req.body 

        const token = await businessSignup(name, email, password, role)

        res.status(200).send({token})

    } catch (error) {
        
        res.send({message: error.message || error.sqlMessage})

    }
}

export const getAllUsers = async(req: Request, res: Response) => {
    try {
        
        const token: string = req.headers.authorization as string

        const allUsers = await businessGetAllUsers(token)

        res.status(200).send({users: allUsers})

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}

export const deleteUser = async(req: Request, res: Response) => {
    try {
        
        const input = {
            id: req.params.id,
            token: req.headers.authorization!
        }

        await businessDeleteUser(input)

        res.status(200).send("User deleted!")

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}

