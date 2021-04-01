export const isAnagram = (s: string, t: string): boolean => {

    if(s.length !== t.length) return false

    return s.toLowerCase().split("").sort().join("") === t.toLowerCase().split("").sort().join("")
}

// console.log(isAnagram("gato", "toga"))
// console.log(isAnagram("gato", "togaa"))
// console.log(isAnagram("gato", "rato"))
