import { Request, Response } from "express";
import { selectRecipeById } from "../data/selectRecipeById";
import { selectUserById } from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import dayjs from 'dayjs';

export const getRecipeById = async(req: Request, res: Response) => {

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

        const data = await selectRecipeById(id)

        if (!data) {
            res.statusCode = 404
            throw new Error('User not found!')
        }

        const user = await selectUserById(data.user_id)

        const recipe = {
            id: data.id,
            title: data.title,
            description: data.description,
            createdAt: dayjs(data.created_at).format('DD-MM-YYYY'),
            createdBy: user.name
        }

        res.status(200).send({recipe: recipe})

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}