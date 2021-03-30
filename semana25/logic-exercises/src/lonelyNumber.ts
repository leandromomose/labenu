export const lonelyNumber = (array: number[]): number | undefined => {
    if(array.length === 0) return undefined 

    let lonely = array.reduce((a, b) => a ^ b, 0)

    return lonely
}

// console.log(lonelyNumber([1, 2, 3, 1, 2]));
