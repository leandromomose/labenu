import { connection } from ".."

export default async function SelectUserByType(type: string): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        WHERE type LIKE '${type}'
    `)

    return result[0]
}