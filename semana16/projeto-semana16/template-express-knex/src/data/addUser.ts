import { connection } from "..";

export default async function addUser(
    id: string,
    name: string,
    nickname: string,
    email: string
): Promise<any> {
    await connection
    .insert({
        id,
        name,
        nickname,
        email
    })
    .into('TodoListUser')
}