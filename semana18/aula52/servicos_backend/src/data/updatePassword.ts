import { connection } from ".."

const TABLE_NAME: string = "Users"

export const updatePassword = async(email: string, password: string) => {

    await connection.raw(`
        UPDATE ${TABLE_NAME}
        SET password = "${password}"
        WHERE email = "${email}"
    `)

}