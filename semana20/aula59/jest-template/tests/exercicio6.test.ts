import { Character } from "../src/exercicio1"
import { performAttackInversion } from "../src/exercicio3"

describe("Testing more attacks", () => {
    test("Should kill defender", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Ryu",
            life: 1500,
            defense: 400,
            strength: 2000
        }

        const defender: Character = {
            name: "Blanka",
            life: 1500,
            defense: 200,
            strength: 1000
        }

        performAttackInversion(attacker, defender, validatorMock)

        expect(defender.life).toBeLessThan(0)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should not lose life when attack is the same as defense", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Ryu",
            life: 1500,
            defense: 400,
            strength: 2000
        }

        const defender: Character = {
            name: "Blanka",
            life: 1500,
            defense: 2000,
            strength: 1000
        }

        performAttackInversion(attacker, defender, validatorMock)

        expect(defender.life).toBe(1500)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should not perform attack when attack is less than defense", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Ryu",
            life: 1500,
            defense: 400,
            strength: 2000
        }

        const defender: Character = {
            name: "Blanka",
            life: 1500,
            defense: 4000,
            strength: 1000
        }

        performAttackInversion(attacker, defender, validatorMock)

        expect(defender.life).toBe(1500)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })
})
