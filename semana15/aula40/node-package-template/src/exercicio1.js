const userInfo = require('../userInfo')

// a-  utilizando o process.argv

// console.log(process.argv)

// b- 

const name = userInfo.name

const age = Number(userInfo.age)

// console.log(`Olá, ${name}! Você tem ${age} anos.`)

// c-

const ageInSevenYears = Number(userInfo.age) + Number(7)

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears}`)