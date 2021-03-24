export const checkBrackets = (string: string = "(" || ")" || "[" || "]" || "{" || "}"): boolean => {
    const stack = []

    for(let char of string) {
        if(char === "(" || char === "[" || char === "{") {
            stack.push(char)
        } else{
            const openingChar = stack.pop()
            if(!openingChar){
                return false
            } else if(
                (openingChar === "(" && char !== ")") ||
                (openingChar === "[" && char !== "]") ||
                (openingChar === "{" && char !== "}")
            ){
                return false
            }
        }
    }

    if(stack.length > 0) {
        return false
    }

    return true
}

console.log(checkBrackets("()"))