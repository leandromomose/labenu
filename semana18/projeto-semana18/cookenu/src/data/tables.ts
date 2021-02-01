import { connection } from "../index"

const createTables = async (): Promise<void> => {
    try {
        await connection.raw(`
        CREATE TABLE Cookenu_Users (
            id VARCHAR(255) UNIQUE PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        
        CREATE TABLE Cookenu_Recipes (
            id VARCHAR(255) UNIQUE PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            created_at DATE NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES Cookenu_Users(id)
        );
        `)

        console.log("Tables created!")

        connection.destroy()

    } catch (error) {

        console.log(error.sqlMessage || error.message)

        connection.destroy()
    }
}

createTables()