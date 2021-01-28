import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { insertUserAddress } from "../data/insertUserAddress";
import { getAddressByCep } from "../services/addressManager";
import { generateToken } from "../services/authenticator";
import { generateHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { UserAddress } from "../types/UserAdress";


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
            street_name: addressInfo.name,
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