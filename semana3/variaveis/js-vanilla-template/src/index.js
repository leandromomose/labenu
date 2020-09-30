/* 
Exercícios de interpretação de código:

1-  console.log(b) = 10
    console.log (a, b) = 10 5

2-  console.log(a, b, c) = 10 10 10
*/

// Exercícios de escrita de código:

// Exercício 1

let nome 
console.log(typeof nome)

let idade 
console.log(typeof idade)

// foi impresso para ambos o tipo undefined pois nao foi atribuido nenhum valor para eles

nome = prompt ("Qual é o seu nome?")
console.log(typeof nome)

idade = prompt ("Qual é a sua idade?")
console.log(typeof idade)

// agora os tipos das variáveis voltam como string

console.log(`Olá ${nome}, você tem ${idade} anos`)

// Exercício 2

const cor = prompt ("Qual a sua cor favorita?")
console.log("1. Qual a sua cor favorita?")
console.log(`Resposta: ${cor}`)

const animal = prompt ("Qual o seu animal favorito?")
console.log("2. Qual o seu animal favorito?")
console.log(`Resposta: ${animal}`)

const estacao = prompt ("Qual a sua estação do ano favorita?")
console.log("3. Qual a sua estação do ano favorita?")
console.log(`Resposta: ${estacao}`)

const lugar = prompt ("Você prefere praia ou campo?")
console.log("4. Você prefere praia ou campo?")
console.log(`Resposta: ${lugar}`)

const esporte = prompt ("Qual o seu esporte favorito?")
console.log("5. Qual o seu esporte favorito?")
console.log(`Resposta: ${esporte}`)

// Exercício 3

const comidasPreferidas = ["churrasco", "parmeggiana", "feijoada", "pizza", "japones"]
console.log(comidasPreferidas)


console.log(`Essas são minhas comidas preferidas: \n ${comidasPreferidas[0]} \n ${comidasPreferidas[1]} \n ${comidasPreferidas[2]} \n ${comidasPreferidas[3]} \n ${comidasPreferidas[4]}`)

const comida = prompt ("Qual a sua comida preferida?")
comidasPreferidas[1] = comida
console.log(`Essas são minhas comidas preferidas: \n ${comidasPreferidas[0]} \n ${comidasPreferidas[1]} \n ${comidasPreferidas[2]} \n ${comidasPreferidas[3]} \n ${comidasPreferidas[4]}`)

// Exercício 4

const perguntas = ["Hoje está sol em BH?", "Domingo tem Fanstástico?", "Neymar joga no Barcelona?"]
const respostas = ["true", "true", "false"]
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])