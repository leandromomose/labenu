import { Request, Response } from "express";
import { selectOrderBy } from "../data/selectOrderBy";
import { searchUser } from "../types/searchUser";

export const getOrderBy = async (req: Request, res: Response): Promise<void> => {

    try {
        const { orderBy = "name", orderType = "DESC" } = req.query as searchUser;

        if (!orderBy.length) {
            res.statusCode = 404;
            throw new Error("No users found")
        }

        const users = await selectOrderBy(orderBy, orderType)

        if (orderBy !== "name" && orderBy !== "type") {
            res.statusCode = 422
            throw new Error(`Valid values for "orderBy" are "name" and "type"`)
        }

        if(orderType !== "ASC" && orderType !== "DESC"){
            res.statusCode = 422
            throw new Error(`Valid values for "orderType" are "ASC" and "DESC"`)
        }

        const result = await selectOrderBy(orderBy, orderType)
        res.status(200).send(result)

    } catch (error) {
        
        res.send(error.message || error.sqlMessage)
    }
}