const sum = (integer, acc = 0) => {
    if (integer === 0) {
        return acc;
    }
    return sum(integer - 1, acc + integer);
};
console.log(sum(10));
