import { UserBusiness } from "../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";

describe("Testing getAllUsers Business", () => {

    let idGenerator = {} as IdGenerator;
    let hashGenerator = {} as HashGenerator;
    let userDatabase = {} as any;
    let tokenGenerator = {} as TokenGenerator;

    test("Should return unauthorized error when User is NORMAL", async() => {
        expect.assertions(2)

        try {
            const userBusiness = new UserBusiness(
                idGenerator,
                hashGenerator,
                userDatabase,
                tokenGenerator
            )

            await userBusiness.getAllUsers(UserRole.NORMAL)
        } catch (error) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Only ADMIN users are able to make this request")
        }
    })

    test("Should return all Users", async() => {
        const getAllUsers = jest.fn(() => [
            new User(
                "id",
                "Leandro",
                "leandro@email.com",
                "hash",
                stringToUserRole("ADMIN")
            )
        ])
        userDatabase = {getAllUsers}

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        )

        const result = await userBusiness.getAllUsers(UserRole.ADMIN)

        expect(getAllUsers).toHaveBeenCalled()
        expect(result).toContainEqual({
            id: "id",
            name: "Leandro",
            email: "leandro@email.com",
            role: UserRole.ADMIN
        })
    })

})