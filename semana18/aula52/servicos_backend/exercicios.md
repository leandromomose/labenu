### Exercício 1

app.get("/address/:cep", getAddressInfo)

const URL = "https://viacep.com.br/ws"

export const getAddressByCep = async(cep: string): Promise<address> => {

    try {

        const result = await axios.get(`${URL}/${cep}/json`)

        const myAddress: address = {
            name: result.data.logradouro,
            neighbourhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }
    
        return myAddress
    
    } catch (error) {
        throw new Error(error.message)
    }

}

export const getAddressInfo = async(req: Request, res: Response) => {
    try {
        
        if(isNaN(Number(req.params.cep)) || req.params.cep.includes("-")){
            throw new Error("Forneça apenas valores numéricos")
        }

        const cep = req.params.cep

        const address: address = await getAddressByCep(cep)

        res.status(200).send(address)

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}

### Exercício 2

CREATE TABLE Users_Addresses (
	id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
    street_name VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL,
    complement VARCHAR(255),
    neighbourhood VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

### Exercício 3

export const insertUserAddress = async(newUserAddress: UserAddress) => {
    try {
        
        await connection("Users_Addresses")
        .insert(newUserAddress)

    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}

export const createUser = async(req: Request, res: Response) => {
    const {email, password, role, cep, placeNumber, complement} = req.body

    try {

        const id: string = generateId()
        const userAddressId: string = generateId()

        if(!cep){
            res.statusCode = 422
            throw new Error("Pro favor informe um número válido para CEP utilizando somente números")
        }

        if(!placeNumber){
            res.statusCode = 422
            throw new Error("Por favor informe o número da localidade")
        }

        if(!email || email.indexOf("@") === -1){
            res.statusCode = 400
            throw new Error('O campo email deve ser preenchido e ele deve conter @ ')
        }

        if(!password || password.length < 6){
            res.statusCode = 400
            throw new Error("O campo password deve ser preenchido e ele deve conter 6 ou mais caracteres")
        }

        const cypherPassword: string = await generateHash(password)

        const addressInfo = await getAddressByCep(cep)

        const newUserAddress: UserAddress = {
            id: userAddressId,
            street: addressInfo.name,
            number: placeNumber,
            neighbourhood: addressInfo.neighbourhood,
            complement: complement,
            city: addressInfo.city,
            state: addressInfo.state,
            user_id: id
        }


        await insertUser(id, email, cypherPassword, role)
        await insertUserAddress(newUserAddress)

        const token = generateToken({id, role})

        res.status(200).send({token})

    } catch (error) {
        res.send({
            message: error.message || error.sqlMessage
        })
    }
}