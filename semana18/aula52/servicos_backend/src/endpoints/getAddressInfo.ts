import { Request, Response } from "express";
import { getAddressByCep } from "../services/addressManager";
import { Address } from "../types/address";

export const getAddressInfo = async(req: Request, res: Response) => {
    try {
        
        if(isNaN(Number(req.params.cep)) || req.params.cep.includes("-")){
            throw new Error("Forneça apenas valores numéricos")
        }

        const cep = req.params.cep

        const address: Address = await getAddressByCep(cep)

        res.status(200).send(address)

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}