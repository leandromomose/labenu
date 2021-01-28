import axios from "axios";
import { Address } from "../types/address";


const URL = "https://viacep.com.br/ws"

export const getAddressByCep = async(cep: string): Promise<Address> => {

    try {

        const result = await axios.get(`${URL}/${cep}/json`)

        const myAddress: Address = {
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