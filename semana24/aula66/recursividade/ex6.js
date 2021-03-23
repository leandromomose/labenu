const largestArrayValue = (array, index = 0, largest = 0) => {
    let aux = largest;
    if (array[index] > largest) {
        aux = array[index];
    }
    if (index === array.length - 1) {
        return aux;
    }
    return largestArrayValue(array, index + 1, aux);
};
console.log(largestArrayValue([43, 276, 1, 754, 8]));
