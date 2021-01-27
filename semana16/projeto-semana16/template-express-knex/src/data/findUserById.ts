import { connection } from "..";

export default async function findUserById(
    id: string
): Promise<any> {
    const result = await connection("TodoListUser")
    .select("*")
    .where({id})

    return result[0]
}