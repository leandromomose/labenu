import { deleteUser, insertUser, selectAllUsers, selectUserByEmail } from "../data/userDatabase"
import { ROLE, user } from "./entities/user"
import { AuthenticationData, generateToken, getTokenData } from "./services/authenticator"
import { compareHash, generateHash } from "./services/hashManager"
import { generateId } from "./services/idGenerator"

export const businessSignup = async (
    name: string,
    email: string,
    password: string,
    role: ROLE
) => {
    const id: string = generateId()

    if (!name || !email || !password || !role) {
        throw new Error('Fields "name", "email", "password" and "role" must be provided')
    }

    if (email.indexOf("@") === -1) {
        throw new Error('The field "email" must contain an @ character')
    }

    if (password.length < 6) {
        throw new Error('The field "password" must contain 6 or more characters')
    }

    const cypherPassword: string = await generateHash(password)

    const newUser: user = {
        id: id,
        name: name,
        email: email,
        password: cypherPassword,
        role: role
    }

    await insertUser(newUser)

    const token = generateToken({ id, role })

    return token
}

export const businessLogin = async (
    email: string,
    password: string
) => {
    if (!email || email.indexOf("@") === -1) {
        throw new Error('The field "email" must be provided and it must have an "@" character')
    }

    if (!password) {
        throw new Error('The filed "password" must be provided')
    }

    const newUser = { email, password }

    const user = await selectUserByEmail(newUser.email)

    if (!user) {
        throw new Error("User not found")
    }

    const passwordMatch: boolean = await compareHash(newUser.password, user.password)

    if (!passwordMatch) {
        throw new Error("Invalid password")
    }

    const token = generateToken({ id: user.id, role: user.role });

    return token
}

export const businessGetAllUsers = async (token: string) => {

    getTokenData(token)

    const allUsers: user[] = await selectAllUsers()

    return allUsers
}

export const businessDeleteUser = async (input: { token: string, id: string }) => {

    const verifiedToken: AuthenticationData = getTokenData(input.token)

    if (verifiedToken.role !== 'ADMIN') {
        throw new Error("Only ADMIN can delete users!")
    }

    return await deleteUser(input.id)
}