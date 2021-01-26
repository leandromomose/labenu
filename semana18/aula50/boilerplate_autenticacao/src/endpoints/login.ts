import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error('O campo email deve ser preenchido e ele deve conter @')
        }

        if (!password) {
            res.statusCode = 422
            throw new Error('O campo password deve ser informado')
        }

        const newUser = { email, password }

        const user = await selectUserByEmail(newUser.email)

        if (!user) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        if (user.password !== newUser.password) {
            res.statusCode = 401
            throw new Error("Senha inválida")
        }

        const token = generateToken({id: user.id});

        res.status(200).send({token})

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}