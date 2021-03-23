const sum = (integer: number, acc: number = 0): number => {
    if(integer === 0){
        return acc
    }
    return sum(integer - 1, acc + integer)
}

console.log(sum(5))