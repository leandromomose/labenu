import { insertUser, selectUserByEmail } from "../data/userDatabase"
import { User } from "./entities/user"
import { generateToken } from "./services/authenticator"
import { compare, hash } from "./services/hashManager"
import { generateId } from "./services/idGenerator"

export const businessSignup = async (
    name: string,
    email: string,
    password: string
) => {

    try {

        if (!name || !email || !password) {
            throw new Error('"name", "email" and "password" must be provided')
        }

        if (email.indexOf("@") === -1) {
            throw new Error('The field "email" must contain an @ character')
        }

        if (password.length < 6) {
            throw new Error('The field "password" must contain 6 or more characters')
        }

        const id: string = generateId()

        const cypherPassword = await hash(password)

        const newUser: User = {
            id,
            name,
            email,
            password: cypherPassword
        }

        await insertUser(newUser)

        const token: string = generateToken({ id })

        return token

    } catch (error) {
        throw new Error(error.message)
    }
}

export const businessLogin = async (
    email: string,
    password: string
) => {

    try {

        if (!email || email.indexOf("@") === -1) {
            throw new Error('The field "email" must be provided and it must have an "@" character')
        }

        if (!password) {
            throw new Error('The field "password" must be provided')
        }

        const user: User = await selectUserByEmail(email)

        if (!user) {
            throw new Error("User not found")
        }

        const passwordIsCorrect: boolean = await compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Incorrect password, please try again")
        }

        const token: string = generateToken({ id: user.id })

        return token

    } catch (error) {
        throw new Error(error.message)
    }
}