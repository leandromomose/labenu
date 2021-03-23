import {missingNumber} from "../src/missingNumber"

describe("Testing missingNumber", () => {
    it("Should return [48]", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 100; i++) numberArray.push(i)
        numberArray.splice(47, 1)

        const result = missingNumber(numberArray)

        expect(result).toEqual([48])
    })
})