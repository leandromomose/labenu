export const missingNumber = (array: number[], lastNumber: number = 100): number[] => {
    const oneHundredArray: Array<number | undefined> = []
    const missingNumbers: number[] = []

    for (const num of array) {
        oneHundredArray[num - 1] = num
    }

    for (let i = 0; i < lastNumber; i++) {
        if (oneHundredArray[i] === undefined) {
            missingNumbers.push(i + 1)
        }
    }

    return missingNumbers
}

// deve retornar [4, 8, 20, 83, 86, 89]

console.log(missingNumber([1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15,  16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27,  28, 29, 30, 31,   32, 33, 34, 35, 36, 37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,  64, 65,66, 67, 68, 69, 70, 71, 72, 73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 84, 85, 87, 88, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]))