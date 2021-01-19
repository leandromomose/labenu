import { Request, Response } from "express";
import { searchUser } from "../types/searchUser";
import selectDefaultUser from "../data/selectDefaultUser"

export const getUsersByDefault = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        name,
        type,
        orderBy = "name",
        orderType = "ASC",
        page = "1",
      } = req.query as searchUser;
  
  
      let key: string = "name"

      if(!name) {key = "type"}
  
      if (orderBy !== "name" && orderBy !== "type") {
        res.statusCode = 422;
        throw new Error(`Valid values for "orderBy" are "name" and "type"`);
      }
  
      if (orderType !== "ASC" && orderType !== "DESC") {
        res.statusCode = 422;
        throw new Error(`Valid values for "orderType" are "ASC" and "DESC"`);
      }
  
      const users = await selectDefaultUser(
          orderBy,
          orderType,
          page,
          key,
          name || type
      )
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  };