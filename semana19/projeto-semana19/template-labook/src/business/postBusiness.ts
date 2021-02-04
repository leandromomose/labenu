import { insertPost, selectPostById } from "../data/postDatabase";
import { Post, POST_TYPES } from "./entities/post";
import { generateId } from "./services/idGenerator";

export const businessCreatePost = async (
    photo: string,
    description: string,
    type: POST_TYPES
) => {
    if (
        !photo ||
        !description ||
        !type
    ) {
        throw new Error('Fields "photo", "description" and "type" must be provided')
    }

    if (type !== "normal" && type !== "event") {
        throw new Error('The field "type" must be either "normal" or "event"')
    }

    const id: string = generateId()

    await insertPost({
        id,
        photo,
        description,
        type
    })
}

export const businessGetPostById = async (
    id: string
) => {
    const queryResult = await selectPostById(id)

    if(!queryResult){
        throw new Error("Post not found")
    }

    const post: Post = {
        id: queryResult[0].id,
        photo: queryResult[0].photo,
        description: queryResult[0].description,
        type: queryResult[0].type,
        createdAt: queryResult[0].created_at,
        authorId: queryResult[0].author_id,
    }

    return post
}