import { UserBusiness } from "../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";

describe("Testing getUserById Business", () => {
    let idGenerator = {} as IdGenerator;
    let hashGenerator = {} as HashGenerator;
    let userDatabase = {} as any;
    let tokenGenerator = {} as TokenGenerator;

    test("Should retur error User not found when user does not exist", async () => {
        expect.assertions(2)
        try {
            const getUserById = jest.fn()
            userDatabase = { getUserById }

            const userBusiness = new UserBusiness(
                idGenerator,
                hashGenerator,
                userDatabase,
                tokenGenerator
            )

            await userBusiness.getUserById("userIdMock")
        } catch (error) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("User not found")
        }
    })

    test("Should return User", async () => {
        const getUserById = jest.fn((id: string) =>
            new User(
                "id",
                "Leandro",
                "leandro@email.com",
                "hash",
                stringToUserRole("ADMIN")
            )
        )

        userDatabase = { getUserById }

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        )

        const user = await userBusiness.getUserById("id")

        expect(userDatabase.getUserById).toHaveBeenCalledWith("id");
        expect(user).toEqual({
            id: "id",
            name: "Leandro",
            email: "leandro@email.com",
            role: UserRole.ADMIN,
        })
    })
})