import {countNegativesInOrderedMatrix} from "../src/countNegativesInOrderedMatrix"

describe("Testing countNegativesInOrderedMatrix", () => {
    it("Should return 8", () => {
        const result = countNegativesInOrderedMatrix([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])
        expect(result).toBe(8)
    })

    it("Should return 0", () => {
        const result = countNegativesInOrderedMatrix([[3,2],[1,0]])
        expect(result).toBe(0)
    })

    it("Should return 3", () => {
        const result = countNegativesInOrderedMatrix([[1,-1],[-1,-1]])
        expect(result).toBe(3)
    })

    it("Should return 1", () => {
        const result = countNegativesInOrderedMatrix([[-1]])
        expect(result).toBe(1)
    })
})