import { connection } from "..";
import { UserAddress } from "../types/UserAdress";

export const insertUserAddress = async(newUserAddress: UserAddress) => {
    try {
        
        await connection("Users_Addresses")
        .insert(newUserAddress)

    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}