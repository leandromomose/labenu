import { Request, Response } from "express";
import moment from 'moment';
import addTask from "../data/addTask";

export default async function createTask(req: Request, res: Response){
    try {
        if(!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creator_user_id){
            res.status(400).send({message: "Todos os campos são obrigatórios"})
            return
        }

        const dateDiff: number = moment(req.body.limit_date, 'DD/MM/YYYY').unix() - moment().unix()

        if(dateDiff <= 0){
            res.status(400).send({message: "limit_date deve ser uma data futura"})
            return
        }

        const id = Date.now().toString()

        await addTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.limit_date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            req.body.creator_user_id
        )

        res.status(200).send({message:"Tarefa criada com sucesso!", id})

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}