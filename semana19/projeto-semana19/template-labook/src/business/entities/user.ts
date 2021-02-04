import { Post } from "./post";

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    posts?: Post[]
 }