import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { updatePassword } from "../data/updatePassword";
import { generateHash } from "../services/hashManager";
import { writeEmail } from "../services/mailer";

export const resetPassword = async(req: Request, res: Response) => {
    try {
        
        const {email} = req.body

        if(!email || !email.includes("@")){
            throw new Error("Por favor preencher o campo email corretamente")
        }

        const user = await selectUserByEmail(email)

        if(!user){
            throw new Error("Usuário não encontrado")
        }

        const password: string = "jaesqueci"
        const hashPassword = await generateHash(password)

        await updatePassword(email, hashPassword)
        await writeEmail({
            from: "Leandro Momose <leandro@momose.com>",
            to: "leandro.momose@gmail.com",
            subject: "Nova senha - User",
            text: "Esta é a sua nova senha",
            html: `Olá, ${user.name}. Sua senha foi atualizada. Sua nova senha é ${password}`
        })

        res.status(200).send("Senha atualizada! Por favor verifique o seu email")

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}