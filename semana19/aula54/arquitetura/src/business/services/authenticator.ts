import * as jwt from "jsonwebtoken";
import { ROLE } from "../entities/user";

export type AuthenticationData = {
    id: string,
    role: ROLE
}

export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {
            id: input.id,
            role: input.role
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRE_TIME as string
        }
    )
    return token
}

export function getTokenData(token: string): AuthenticationData {
    const payload =  jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData

    return {
        id: payload.id,
        role: payload.role
    }
} 