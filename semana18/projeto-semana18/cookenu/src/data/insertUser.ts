import { connection } from "..";
import { user } from "../types/user";

export const insertUser = async (newUser: user) => {

    try {

        await connection(('Cookenu_Users'))
        .insert(newUser)

    } catch (error) {

      throw new Error(error.message || error.sqlMessage)

    }
}