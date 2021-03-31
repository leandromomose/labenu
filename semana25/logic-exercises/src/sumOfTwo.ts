interface HashTable {
    [index: number]: number
}

export const sumOfTwo = (numbers: number[], target: number): number[] => {
    const hashTable: HashTable = {}

    for (let i = 0; i < numbers.length; i++) {
        const expected = target - numbers[i]

        if (hashTable[expected] !== undefined) {
            return [hashTable[expected], i]
        }

        hashTable[numbers[i]] = i
    }

    return []
} 

// console.log(sumOfTwo([2, 7, 11, 15], 9))
