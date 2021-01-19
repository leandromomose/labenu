import { Request, Response } from "express";
import SelectUserByName from "../data/selectUserByName";

export const getUserByName = async(req: Request, res: Response): Promise<void> => {
    try {
        const users = await SelectUserByName(req.query.name as string)

        if(!users.length){
            res.statusCode = 404
            throw new Error("User not found")
        }

        res.status(200).send({user: users})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}