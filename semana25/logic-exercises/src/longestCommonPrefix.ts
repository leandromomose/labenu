export const longestCommonPrefix = (strings: string[]): string => {
    if(strings.length === 0) return ""

    let commonPrefix = ""

    for(let i = 0; i < strings[0].length; i++){
        let characteres = strings[0][i]
        let allCharactersSame = true

        for(let j = 0; j < strings.length; j++){
            if(strings[j][i] !== characteres){
                return commonPrefix
            }
        }

        if(characteres){
            commonPrefix += characteres
        }
    }

    return commonPrefix
}


