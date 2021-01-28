### Exercício 1

a- Eu concordo no uso de strings para representar id´s. Acredito que seja melhor do que usar somente números pois strings você pode incluir letras e caracteres especiais, deixando assim a probabilidade menor de que ocorra alguma colisão.

b- import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }

  ### Exercício 2

  a- O código cria a conexão com o banco de dados e a função createUser cria um novo usuário na tabela userTableName

  b- CREATE TABLE Users (
	id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

c- export const createUser = async (
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

### Exercício 3

a- Ela garante que a informação que vai chegar do process.env será uma string. Usamos ela ali para garantir que a informação não será undefined

b- export type AuthenticationData = {
    id: string
}

export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {
            id: input.id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRE_TIME as string
        }
    )
    return token
}

### Exercício 4

export const createUser = async(req: Request, res: Response) => {
    const {email, password} = req.body

    try {
        const id: string = generateId()

        if(!email || email.indexOf("@") === -1){
            res.statusCode = 400
            throw new Error('O campo email deve ser preenchido e ele deve conter @ ')
        }

        if(!password || password.length < 6){
            res.statusCode = 400
            throw new Error("O campo password deve ser preenchido e ele deve conter 6 ou mais caracteres")
        }

        await insertUser(id, email, password)

        const token = generateToken({id})

        res.status(200).send({token})

    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}

### Exercício 5

export const selectUserByEmail = async(email: string): Promise<any> => {
    try {
        
        const result = await connection("Users")
        .select("*")
        .where({email})

        return result[0]

    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}

### Exercício 6

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error('O campo email deve ser preenchido e ele deve conter @')
        }

        if (!password) {
            res.statusCode = 422
            throw new Error('O campo password deve ser informado')
        }

        const newUser = { email, password }

        const user = await selectUserByEmail(newUser.email)

        if (!user) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        if (user.password !== newUser.password) {
            res.statusCode = 401
            throw new Error("Senha inválida")
        }

        const token = generateToken({id: user.id});

        res.status(200).send({token})

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}

### Exercício 7

a- Ela diz que a verificação do JWT pode vir como qualquer coisa. Precisamos usar ali para indicar que alguma coisa irá retornar

b- export function getTokenData(token: string): AuthenticationData {
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
} 

### Exercício 8

a- export const selectUserById = async(id: string): Promise<any> => {
    try {
        
        const result = await connection("Users")
        .select("*")
        .where({id})

        return result[0]

    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}

b- export const getUserById = async(req: Request, res: Response) => {
    try {
        
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        const user = await selectUserById(tokenData.id)

        if(!user){
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send({message: {id: user.id, email: user.email}})

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}