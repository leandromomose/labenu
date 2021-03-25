import {longestCommonPrefix} from "../src/longestCommonPrefix"

describe("Testing longestCommonPrefix", () => {
    it("Should return a string with the longest common prefix", () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
        expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
        expect(longestCommonPrefix(["coracao","cor","corona","coreia"])).toBe("cor")
    })
})