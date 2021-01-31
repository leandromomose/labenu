import * as bcrypt from "bcryptjs"


export const generateHash = async (plainText: string): Promise<string> => {
   
    const salt: string = await bcrypt.genSalt(Number(process.env.BCRYPT_COST))

    const cypheredText: string = await bcrypt.hash(plainText, salt)

    return cypheredText
}

export const compareHash = async (plainText: string, cypheredText: string): 
Promise<boolean> => {
    return bcrypt.compare(plainText, cypheredText)
}