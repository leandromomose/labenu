const stringCompression = (input) => {
    const substrings = [];
    let lastCharac = input[0];
    let characCount = 0;
    for (const charac of input) {
        if (charac !== lastCharac) {
            substrings.push(lastCharac + characCount);
            lastCharac = charac;
            characCount = 0;
        }
        characCount++;
    }
    substrings.push(lastCharac + characCount);
    let result = "";
    for (const key of substrings) {
        result += key;
    }
    return result.length > input.length ? input : result;
};
console.log(stringCompression("aabbb"));
console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression("accurate"));
console.log(stringCompression("escola"));
console.log(stringCompression("accuraaaaaaaaaate"));
