import {isAnagram} from "../src/isAnagram"

describe("Testing isAnagram", () => {
    it("Should return true", () => {
        const result = isAnagram("anagrama", "nagarama")
        expect(result).toBe(true)
    })

    it("Should return true", () => {
        const result = isAnagram("gato", "toga")
        expect(result).toBe(true)
    })

    it("Should return false", () => {
        const result = isAnagram("gato", "rato")
        expect(result).toBe(false)
    })
})