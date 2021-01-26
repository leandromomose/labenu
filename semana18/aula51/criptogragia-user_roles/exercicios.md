### Exercício 1

a- Rounds é o valor recebido na função genSalt, ou seja, o cost (custo - numérico), que esta relacionado à segurança da senha. Quanto maior o cost, maior o tempo de execução do algoritmo. O salt por sua vez, é uma string aleatória na senha antes de se criar o hash. Os valores recomendados para o round vão depender do sistema pois quanto maior, melhor, porém maior vai ser o tempo de execução a consequentemente, possivelmente, maior vai ser a espera do usuário. Então, deve-se haver um balanço. Eu utilizei o valor 12 por ser padrão na maioria das libs.

b- export const generateHash = async(plainText: string): Promise<string> => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = await bcrypt.genSalt(rounds)
    const cypherText: string = await bcrypt.hash(plainText, salt)
    return cypherText
}

c- export const compare = async(plainText: string, cypherText: string): Promise<boolean> => {
    return bcrypt.compare(plainText, cypherText);
}

### Exercício 2

a- Devemos modificar primeiro o cadastro. Pois a senha não pode ser salva diretamente no banco, temos que gerar o hash para ele sim, ser salvo no banco. Modificando primeiro o login, daria erro pois estaríamos comparando a senha em plainText com o hash.

b- export const createUser = async(req: Request, res: Response) => {
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

        const cypherPassword: string = await generateHash(password)

        await insertUser(id, email, cypherPassword)

        const token = generateToken({id})

        res.status(200).send({token})

    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}

c- export const login = async (req: Request, res: Response) => {
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

        const passwordMatch: boolean = await compare(password, user.password)

        if (!passwordMatch) {
            res.statusCode = 401
            throw new Error("Senha inválida")
        }

        const token = generateToken({id: user.id});

        res.status(200).send({token})

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}

d- Não é necessário modificar este endpoint. Pois o endpoint somente busca um usuário pelo id e nada foi alterado na criação do id, apenas foi modificado a geração do password.

### Exercício 3

a- ALTER TABLE Users
ADD role ENUM("NORMAL", "ADMIN") DEFAULT ("NORMAL");

b- export type AuthenticationData = {
    id: string,
    role: string
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

c- export const createUser = async(req: Request, res: Response) => {
    const {email, password, role} = req.body

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

        const cypherPassword: string = await generateHash(password)

        await insertUser(email, cypherPassword, role)

        const token = generateToken({id, role})

        res.status(200).send({token})

    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}

d- export const login = async (req: Request, res: Response) => {
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

        const passwordMatch: boolean = await compare(password, user.password)

        if (!passwordMatch) {
            res.statusCode = 401
            throw new Error("Senha inválida")
        }

        const token = generateToken({id: user.id, role: user.role});

        res.status(200).send({token})

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}

### Exercício 4

export const getUserById = async(req: Request, res: Response) => {
    try {
        
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if(tokenData.role !== "NORMAL") {
            res.statusCode = 401
            throw new Error("Apenas usuários NORMAL podem acessar esta funcionalidade")
        }

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

### Exercício 5

app.delete("/user/:id", deleteUser)

export const selectUserToDelete = async(id: string) => {
    try {
        await connection('Users')
        .delete()
        .where({id})
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}

export const deleteUser = async(req: Request, res: Response) => {
    try {
        
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if(tokenData.role !== "ADMIN"){
            res.statusCode = 401
            throw new Error("Somente usuários ADMIN podem acessar este endpoint")
        }

        const id: string = req.params.id 

        await selectUserToDelete(id)

        res.status(200).send("Usuário deletado!")

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}

### Exercício 6

app.get("/user/:id", getInfoUserById)

export const selectUserById = async(id: string): Promise<any> => {
    try {
        
        const result = await connection("Users")
        .select("*")
        .where({id})

        return result[0]

    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}

export const getInfoUserById = async(req: Request, res: Response) => {
    try {
        
        const token = req.headers.authorization as string

        getTokenData(token)

        const id: string = req.params.id 

        const user = await selectUserById(id)

        if(!user) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send({id: user.id, email: user.email, role: user.role})

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}