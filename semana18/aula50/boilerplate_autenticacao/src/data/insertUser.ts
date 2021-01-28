import {connection} from "../index";

export const insertUser = async (
    id: string,
    email: string,
    password: string) => {
    await connection
        .insert({
            id,
            email,
            password,
        })
        .into('Users');
};