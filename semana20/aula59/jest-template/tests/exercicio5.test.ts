import { Character } from "../src/exercicio1"
import { performAttackInversion } from "../src/exercicio3"

describe("Testing attack", () => {
    test("Should perform attack", () => {

        const validatorMock = jest.fn(() => {
           return true
        })
       
        const attacker: Character = {
           name: "Ryu",
           life: 1500,
           defense: 400,
           strength: 800
        }

        const defender: Character = {
           name: "Blanka",
           life: 1500,
           defense: 600,
           strength: 1000
        }

       performAttackInversion(attacker, defender, validatorMock)

       expect(defender.life).toEqual(1300)
       expect(validatorMock).toHaveBeenCalled()
       expect(validatorMock).toHaveBeenCalledTimes(2)
       expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should return invalid character error", () => {
        expect.assertions(4)

        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "Ryu",
            life: 1500,
            defense: 600,
            strength: 500
        }
 
        const defender: Character = {
            name: "Blanka",
            life: 1500,
            defense: 500,
            strength: 400
        }

        try {
            performAttackInversion(attacker, defender, validatorMock)
        } catch (error) {
            expect(error.message).toEqual("Invalid Character")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
        }
    })
})