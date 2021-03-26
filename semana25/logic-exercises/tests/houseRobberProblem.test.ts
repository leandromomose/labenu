import {houseRobberProblem} from "../src/houseRobberProblem"

describe("Testing houseRobberProblem", () => {
    it("Should return 4", () => {
        const result = houseRobberProblem([1,2,3,1])

        expect(result).toBe(4)
    })

    it("Should return 12", () => {
        const result = houseRobberProblem([2,7,9,3,1])

        expect(result).toBe(12)
    })

    it("Should return 28", () => {
        const result = houseRobberProblem([2,3,6,12,3,9,11,4])

        expect(result).toBe(28)
    })
})