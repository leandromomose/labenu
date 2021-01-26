import { connection } from ".."

export const selectUserToDelete = async(id: string) => {
    try {
        await connection('Users')
        .delete()
        .where({id})
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}