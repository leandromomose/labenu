import { User } from "../business/entities/user";
import { connection } from "./connections";

export const insertUser = async (
    user: User
) => {
    await connection
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
        .into('labook_users')
}

export const selectUserByEmail = async (
    email: string
): Promise<User> => {
    try {
        const queryResult: any = await connection("labook_users")
            .select("*")
            .where({ email })

        const user: User = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
        }

        return user

    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}