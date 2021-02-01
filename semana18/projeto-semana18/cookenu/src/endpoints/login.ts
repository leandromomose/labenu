import { Request, Response } from "express"
import { selectUserByEmail } from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"
import { compareHash } from "../services/hashManager"

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body

    try {

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error('The field "email" must be provided and it must have an "@" character')
        }

        if (!password) {
            res.statusCode = 422
            throw new Error('The filed "password" must be provided')
        }

        const newUser = { email, password }

        const user = await selectUserByEmail(newUser.email)

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        const passwordMatch: boolean = await compareHash(newUser.password, user.password)

        if (!passwordMatch) {
            res.statusCode = 401
            throw new Error("Invalid password")
        }

        const token = generateToken({id: user.id});

        res.status(200).send({token})

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}