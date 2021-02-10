import { validateCharacter } from "../src/exercicio1"

describe("Validanting characters", () => {
    test("Should return false for empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            defense: 1000,
            strength: 800
        })

        expect(result).toBe(false)
    })

    test("Should return false for life 0", () => {
        const result = validateCharacter({
            name: "Ryu",
            life: 0,
            defense: 1000,
            strength: 800
        })

        expect(result).toBe(false)
    })

    test("Should return false for strength 0", () => {
        const result = validateCharacter({
            name: "Ryu",
            life: 1500,
            defense: 1000,
            strength: 0
        })

        expect(result).toBe(false)
    })

    test("Should return false for defense 0", () => {
        const result = validateCharacter({
            name: "Ryu",
            life: 1500,
            defense: 0,
            strength: 800
        })

        expect(result).toBe(false)
    })

    test("Should return false for negative value", () => {
        const result = validateCharacter({
            name: "Ryu",
            life: 1500,
            defense: -100,
            strength: 800
        })

        expect(result).toBe(false)
    })

    test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
            name: "Ryu",
            life: 1500,
            defense: 1000,
            strength: 800
        })

        expect(result).toBe(true)
    })
})