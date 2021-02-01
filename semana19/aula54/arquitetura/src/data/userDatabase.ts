import { connection } from "./connection"
import { user } from "../business/entities/user";

export const insertUser = async (newUser: user) => {

    try {

        await connection(('User_Arq'))
        .insert(newUser)

    } catch (error) {

      throw new Error(error.message || error.sqlMessage)

    }
}

export const selectUserByEmail = async(email: string): Promise<any> => {
    try {
        
        const result = await connection("User_Arq")
        .select("*")
        .where({email})

        return result[0]

    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}

export const selectAllUsers = async(): Promise<any> => {
    try {
        
        return await connection('User_Arq')
        .select('*')

    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}

export const deleteUser = async(id: string): Promise<any> => {
    try {
        
        await connection('User_Arq')
        .del()
        .where({id})

    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}