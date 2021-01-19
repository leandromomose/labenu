import { Request, Response } from "express";
import { selectLimitUsers } from "../data/selectLimitUsers";

export const getLimitUsers = async(req: Request, res: Response): Promise<void> => {
    try {
        
        const page = req.query.page as string

        const result = await selectLimitUsers(page)

        res.status(200).send({users: result})

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}