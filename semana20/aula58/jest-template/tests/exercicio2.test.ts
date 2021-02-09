import { performPurchase, User } from "../src/exercicio1"

describe("Perform Purchase", () => {

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Leandro",
            balance: 100
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Leandro",
            balance: 50
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Leandro",
            balance: 30
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual(undefined)
    })
})