import { Request, Response } from "express";
import moment from "moment";
import findTaskById from "../data/findTaskById";

export default async function getTaskById(req: Request, res: Response){
    try {
        const result = await findTaskById(req.params.id)

        if(!result){
            res.status(404).send({message: "Tarefa não encontrada"})
            return
        }

        res.status(200).send({
            ...result, 
            limit_date: moment(result.limit_date, 'YYYY-MM-DD').format('DD/MM/YYYY')
        })

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}