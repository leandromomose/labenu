import {checkBrackets} from "../src/checkBrackets"

describe("Testing checkBrackets", () => {
    it("Should return true", () => {
        expect(checkBrackets("()")).toBe(true)
    })

    it("Should return false", () => {
        expect(checkBrackets("(]")).toBe(false)
    })
})