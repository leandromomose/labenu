import { User, toUserModel } from "../business/entities/user";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    insertUser = async(
        user: User
        ) => {

        try {

            await this.connection('labook_users')
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password
                });

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


    getUserByEmail = async(
        email: string
        ): Promise<User> => {
        try {

            const result: any = await this.connection("labook_users")
                .select("*")
                .where({ email });

            return toUserModel(result[0]);;

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}