import { Request, Response } from "express";
import { Post, POST_TYPES } from "../business/entities/post";
import { businessCreatePost, businessGetPostById } from "../business/postBusiness";
import { AuthenticationData, getTokenData } from "../business/services/authenticator";
import dayjs from "dayjs";
import { generateId } from "../business/services/idGenerator";

export const createPost = async (
    req: Request,
    res: Response
) => {
    try {
        const { photo, description, type } = req.body

        const token: string = req.headers.authorization as string

        await businessCreatePost(
            photo,
            description,
            type
        )

        res.status(200).send({ message: 'Post created!' })

    } catch (error) {
        res.send({ message: error.message || error.sqlMessage })
    }
}

export const getPostById = async (
    req: Request,
    res: Response
) => {
    try {
        const { id } = req.params

        const post = await businessGetPostById(id)

        res.status(200).send(post)
        
    } catch (error) {
        res.send({ message: error.message || error.sqlMessage })
    }
}