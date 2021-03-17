const firstCapitalCharacter = (string, character = "") => {
    if (character && character.toLocaleUpperCase() === character) {
        return character;
    }
    return firstCapitalCharacter(string.substring(1), string[0]);
};
console.log(firstCapitalCharacter("alIe"));
