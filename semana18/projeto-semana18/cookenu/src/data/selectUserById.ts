import { connection } from ".."

export const selectUserById = async(id: string): Promise<any> => {
    try {
        
        const result = await connection("Cookenu_Users")
        .select("*")
        .where({id})

        return result[0]

    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}