import { UserDatabase } from "../data/userDatabase";
import { SignupInputDTO, User, LoginInputDTO } from "./entities/user";
import { HashManager } from "./services/hashManager";
import { IdGenerator } from "./services/idGenerator";
import { TokenManager } from "./services/TokenManager";



export class UserBusiness {


    signup = async(
        input: SignupInputDTO
        ): Promise<string> => {
        try {

            if (!input.name || !input.email || !input.password) {
                throw new Error('The fields "name", "email" and "password" must be provided')
            }

            if (input.email.indexOf("@") === -1) {
                throw new Error('The field "email" must contain an @ character')
            }

            if (input.password.length < 6) {
                throw new Error('The field "password" must contain 6 or more characters')
            }

            const idGenerator = new IdGenerator();
            const id: string = idGenerator.generateId();

            const hashManager = new HashManager();
            const cypherPassword = await hashManager.hash(input.password);

            const newUser: User = {
                id,
                name: input.name,
                email: input.email,
                password: cypherPassword
            }

            const userDatabase = new UserDatabase();
            await userDatabase.insertUser(newUser);


            const tokenManager = new TokenManager();
            const token: string = tokenManager.generateToken({ id });

            return token;

        } catch (error) {
            throw new Error(error.message);
        }
    }


    login = async(
        input: LoginInputDTO
        ): Promise<string> => {
        try {

            if (!input.email || input.email.indexOf("@") === -1) {
                throw new Error('The field "email" must be provided and it must have an "@" character')
            }

            if (!input.password) {
                throw new Error('The field "password" must be provided')
            }

            const userDatabase = new UserDatabase();
            const newUser: User = await userDatabase.getUserByEmail(input.email);

            if (!newUser) {
                throw new Error("User not found");
            }

            const hashManager = new HashManager();
            const passwordIsCorrect: boolean = await hashManager.compare(input.password, newUser.password)

            if (!passwordIsCorrect) {
                throw new Error("Incorrect password, please try again");
            }

            const tokenManager = new TokenManager();

            const token: string = tokenManager.generateToken({
                id: newUser.id
            });

            return token;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}



