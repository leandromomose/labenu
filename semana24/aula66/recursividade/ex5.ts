const numDigits = (num: number, digits: number = 1): number => {
    if(num < 10){
        return digits
    }
    return numDigits(num / 10, digits + 1)
}

console.log(numDigits(0))
console.log(numDigits(10))
console.log(numDigits(2034))
console.log(numDigits(123456))