import { connection } from "./connection"

const createTables = async (): Promise<void> => {
    try {
        await connection.raw(`
        CREATE TABLE User_Arq(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(255) DEFAULT "NORMAL"
        )
        `)

        console.log("Tables created!")

        connection.destroy()

    } catch (error) {

        console.log(error.sqlMessage || error.message)

        connection.destroy()
    }
}

createTables()