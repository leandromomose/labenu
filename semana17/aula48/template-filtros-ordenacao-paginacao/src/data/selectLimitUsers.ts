import { connection } from ".."

export async function selectLimitUsers(page: string):Promise<any> {
    const usersPerPage: number = 5

    const pageNumber: number = Number(page)

    const offset: number = usersPerPage * (pageNumber - 1)

    const result = await connection("aula48_exercicio")
    .select("*")
    .limit(usersPerPage)
    .offset(offset)

    return result
}