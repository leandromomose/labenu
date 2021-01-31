import { Request, Response } from "express";
import { insertRecipe } from "../data/insertRecipe";
import { selectUserById } from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { recipe } from "../types/recipe";
import dayjs from 'dayjs';

export const createRecipe = async(req: Request, res: Response) =>{

    const {title, description} = req.body
    const token = req.headers.authorization as string
    const id: string = generateId()

    try {
        
        const tokenData: AuthenticationData = getTokenData(token)

        if(!token || !tokenData){
            res.statusCode = 406
            throw new Error('Invalid token')
        }

        const user = await selectUserById(tokenData.id)

        if (!user) {
            res.statusCode = 404
            throw new Error('User not found!')
        }

        if(!title || !description){
            res.statusCode = 422
            throw new Error('The recipe must contain a "title" and a "description"') 
        }

        const newRecipe: recipe = {
            id: id,
            title: title,
            description: description,
            created_at: dayjs().format('DD-MM-YYYY') ,
            user_id: user.id
        }

        await insertRecipe(newRecipe)

        res.status(201).send({message: `Recipe ${title} created!`})

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}