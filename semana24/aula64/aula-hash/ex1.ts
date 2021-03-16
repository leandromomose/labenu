const isOneEdit = (stringA: string, stringB: string): boolean => {

    if(stringA === stringB){
        return false
    }

    if(stringA.length - stringB.length > 1){
        return false
    }

    if(stringA.length > stringB.length){
        return stringA.includes(stringB)
    }

    if(stringA.length < stringB.length){
        return stringB.includes(stringA)
    }

    let diffChars: number = 0

    for(let i = 0; i < stringA.length; i++){
        if(stringA[i] !== stringB[i])

        diffChars++
    }

    return diffChars === 1
}

console.log(isOneEdit("alice", "alice"))
console.log(isOneEdit("alic", "alice"))
console.log(isOneEdit("alicek", "alice"))
console.log(isOneEdit("elice", "alice"))
console.log(isOneEdit("aliceee", "alice"))