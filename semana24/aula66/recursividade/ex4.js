const printArray = (array, index = array.length - 1) => {
    if (index >= 0) {
        printArray(array, index - 1);
        console.log(array[index]);
    }
};
console.log(printArray([1, 2, 3, 4, 5]));
const array = [1, 2, 3, 4];
console.log(printArray(array));
