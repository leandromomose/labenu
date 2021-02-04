import { Request, Response } from "express";
import { businessLogin, businessSignup } from "../business/userBusiness";

export const signup = async (
    req: Request,
    res: Response
) => {
    try {
        const { name, email, password } = req.body

        const token = await businessSignup(name, email, password)

        res.status(201).send({ message: "User created!", token })

    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}

export const login = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { email, password } = req.body

        const token = await businessLogin(email, password)

        res.send({message: "User logged sucessfuly", token})

    } catch (error) {res.status(400).send(error.message || error.sqlMessage)}
}