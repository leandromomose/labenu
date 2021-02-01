export enum ROLE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: ROLE
}