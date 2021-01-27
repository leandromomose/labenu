import {connection} from "../index";

export const insertUser = async (
    id: string,
    email: string,
    password: string,
    role: string
    ) => {
    await connection
        .insert({
            id,
            email,
            password,
            role
        })
        .into('Users');
};