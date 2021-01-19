import { connection } from "..";

export default async function SelectUserByName(name: string): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        WHERE name LIKE '${name}'
    `)

    return result[0]
}