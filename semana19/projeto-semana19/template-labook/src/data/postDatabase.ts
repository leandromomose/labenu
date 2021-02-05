import { Post } from "../business/entities/post"
import { connection } from "./connections"

export const insertPost = async (
    post: Post
) => {

    try {

        await connection('labook_posts')
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                createdAt: post.createdAt,
                author_id: post.authorId
            })

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export const selectPostById = async (
    id: string
): Promise<any> => {

    try {

        const queryResult: any = await connection("labook_posts")
            .select("*")
            .where({ id })

        return queryResult

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}