import { Request, Response } from "express"
import SelectUserByType from "../data/selectUserByType"

export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await SelectUserByType(req.params.type)

       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }

       res.status(200).send({users: users})

    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }