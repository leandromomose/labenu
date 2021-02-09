import { PostDatabase } from "../data/postDatabase";
import { createPostInputDTO, getPostByIdInputDTO, Post } from "./entities/post";
import { AuthenticationData } from "./entities/user";
import { IdGenerator } from "./services/idGenerator";
import { TokenManager } from "./services/TokenManager";


export class PostBusiness {

    createUser = async(
        input: createPostInputDTO
        ) => {

        try {

            const tokenManager = new TokenManager();

            if (!input.token) {
                throw new Error('Fields "photo", "description" and "type" must be provided');
            }

            if (input.type !== "normal" && input.type !== "event") {
                throw new Error('The field "type" must be either "normal" or "event"')
            }

            const tokenData: AuthenticationData = tokenManager.getTokenData(input.token);

            const idGenerator = new IdGenerator();
            const id: string = idGenerator.generateId();

            const post: Post = {
                id,
                authorId: tokenData.id,
                createdAt: new Date(),
                description: input.description,
                photo: input.photo,
                type: input.type
            }

            await new PostDatabase().createPost(post);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    getPostById = async(
        input: getPostByIdInputDTO
        ) => {
        try {

            const post: Post = await new PostDatabase().getPostById(input.id);

            if (!post) {
                throw new Error("Post not found")
            }
            return post;

        } catch (error) {
            throw new Error(error.message);
        }
    }
}

