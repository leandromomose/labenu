const sumIterative = (integer: number): number => {
    let sum = 0
    for(let i = 0; i <= integer; i++){
        sum += i
    }
    return sum
}

console.log(sumIterative(5))