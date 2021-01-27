import { connection } from "..";

export default async function addTask(
    id: string, 
    title: string,
    description: string,
    limit_date: string,
    creator_user_id: string
): Promise<any> {
    await connection('TodoListTask')
    .insert({
        id, 
        title,
        description,
        limit_date,
        creator_user_id
    })
}