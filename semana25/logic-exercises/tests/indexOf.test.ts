import {indexOf} from "../src/indexOf"

describe("Testing indexOf", () => {
    it("should return 4", () => {
        const result = indexOf("leandro", "d")

        expect(result).toBe(4)
    })

    it("should return 1", () => {
        const result = indexOf("casa", "a")

        expect(result).toBe(1)
    })
})