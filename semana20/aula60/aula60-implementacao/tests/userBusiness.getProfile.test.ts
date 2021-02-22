import { UserBusiness } from "../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";

describe("Testing getProfile Business", () => {

    let idGenerator = {} as IdGenerator;
    let hashGenerator = {} as HashGenerator;
    let userDatabase = {} as any;
    let tokenGenerator = {} as TokenGenerator;

    test("Should return error User not found when user does not exist", async () => {
        expect.assertions(2)
        try {
            tokenGenerator = {
                verify: jest.fn(() => {
                    return { id: "id", role: UserRole.ADMIN }
                })
            } as any

            userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any

            const userBusiness = new UserBusiness(
                idGenerator,
                hashGenerator,
                userDatabase,
                tokenGenerator
            )

            await userBusiness.getProfile("token")
        } catch (error) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("User not found")
        }
    })

    test("Should return User profile", async () => {

        tokenGenerator = { verify: jest.fn(() => { 
            return { id: "id", role: UserRole.ADMIN }
        })} as any;

        const user = new User(
            "id",
            "Leandro",
            "leandro@email.com",
            "hash",
            stringToUserRole("ADMIN")
        ); 

        userDatabase = { getUserById: jest.fn(async (id: string) => user) } as any;

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        );

        const result = await userBusiness.getProfile("token");

        expect(userDatabase.getUserById).toHaveBeenCalledWith("id");
        expect(result).toEqual({
            id: "id",
            name: "Leandro",
            email:"leandro@email.com",
            role: UserRole.ADMIN
        });        
    })
})