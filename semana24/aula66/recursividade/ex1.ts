// a-

const printAllIntegerNumbersAscending = (integer: number) => {
    if(integer >= 0){
        printAllIntegerNumbersAscending(integer - 1)
        console.log(integer)
    }
}

console.log(printAllIntegerNumbersAscending(5))

// b-

const printAllIntegerNumbersDescending = (integer: number) => {
    if(integer >= 0){
        console.log(integer)
        printAllIntegerNumbersDescending(integer - 1)
    }
}

console.log(printAllIntegerNumbersDescending(5))