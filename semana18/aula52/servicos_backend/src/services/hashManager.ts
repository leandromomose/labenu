import * as bcrypt from "bcryptjs";

export const generateHash = async(plainText: string): Promise<string> => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = await bcrypt.genSalt(rounds)
    const cypherText: string = await bcrypt.hash(plainText, salt)
    return cypherText
}

export const compare = async(plainText: string, cypherText: string): Promise<boolean> => {
    return bcrypt.compare(plainText, cypherText);
}