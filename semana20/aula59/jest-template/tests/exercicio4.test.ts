// a- o Mock deve ser da função validateCharacter pois queremos ter o controle de qual será o retorno.

describe("Testing mock for validateCharacter", () => {
    test("Should return true for mock character", () => {
        const validatorMock = jest.fn(() => {
            return true
        })
    })

    test("Should return falsefor mock character", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
    })
})