// a-
const printAllIntegerNumbersAscending = (integer) => {
    if (integer >= 0) {
        printAllIntegerNumbersAscending(integer - 1);
        console.log(integer);
    }
};
console.log(printAllIntegerNumbersAscending(5));
// b-
const printAllIntegerNumbersDescending = (integer) => {
    if (integer >= 0) {
        console.log(integer);
        printAllIntegerNumbersDescending(integer - 1);
    }
};
console.log(printAllIntegerNumbersDescending(5));
