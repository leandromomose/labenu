// Exercícios de interpretação de código

// EXERCÍCIO 1

/* Resposta: O código pede para o usuário indicar um número, analisa esse número e caso esse número, quando dividido por 2 tenha como resto 0, ele imprima a mensagem "passou no teste". Caso esse número inserido, quando dividido por 2, não tenha o resto 0, ele imprime a mensagem "não passou no teste". Então, o teste que ele realiza é: pegar o número inserido pelo usuário, dividir por 2 e comparar se o resto é igual a 0. Caso seja true, ele imprime que passou no teste, caso seja false, ele imprime que não passou. Ele irá imprimir no console que passou no teste para todos os número pares e imprimir que não passou no teste para todos os números ímpares.
*/

// EXERCÍCIO 2

/* a. Resposta: Ele é uma forma de simplificar o código e serve para dar um retorno de valor (preço) de acordo com a fruta que o usuário indicar*/

// b. Resposta: a mensagem será: "O preço da fruta  Maçã  é  R$  2.25"

// c. Resposta: a mensagem seria: "O preço da fruta  Pêra  é  R$  5" pois ele consideraria o default

// EXERCÍCIO 3

// a. Resposta: A primeira linha esta pedindo para o usuário inserir o primeiro número, que será o valor atribuído à variável "numero"

/* b. Resposta: usuário digitou o número 10, a mensagem do terminal será "esse número passou no teste", pois a condição para essa mensagem (true), é se o número inserido for maior que 0. Caso o usuário digite -10 não apareceria nada, apenas o erro dizendo que a variável "mensagem" não está definida.
*/

// c. Resposta: Haverá, o valor da variável mensagem não imprimirá pois o pedido para imprimir foi feito em outro bloco, ou, fora do escopo onde está a variável.

// Exercícios de escrita de código

// EXERCÍCIO 4

// 1.

//const idade = Number(prompt("Qual é a sua idade?"))

// 2.

// cast inserido no prompt

// 3.

/*
if (idade >= 18){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
}
*/

//EXERCÍCIO 5

// const turno = prompt("Em qual turno você estuda? Digite M para matutino V para vespertino e N para noturno").toUpperCase()

/*
if (turno === "M"){
    console.log("Bom dia!")
} else if (turno === "V"){
    console.log("Boa tarde!")
} else if (turno === "N"){
    console.log("Boa noite!")
} else{
    console.log("Não é um turno!")
}
*/

// EXERCÍCIO 6

// const turno = prompt("Em qual turno você estuda? Digite M para matutino V para vespertino e N para noturno").toUpperCase()

/*
switch (turno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Não é um turno!")
        break
}
*/

// EXERCÍCIO 7

/*
const filmeGenero = prompt("Qual o gênero do filme que você vai assistir?").toLowerCase()
const filmePreco = Number(prompt("Qual o valor do ingresso? Digite apenas números"))

if ((filmeGenero === "fantasia") && (filmePreco < 15)){
    console.log("Bom filme!")
} else{
    console.log("Escolha outro filme :(")
}
*/

// DESAFIO 1

/*
const filmeGenero = prompt("Qual o gênero do filme que você vai assistir?").toLowerCase()
const filmePreco = Number(prompt("Qual o valor do ingresso? Digite apenas números"))

if ((filmeGenero === "fantasia") && (filmePreco < 15)){
    const snack = prompt("Qual snack você vai comprar? EX:(pipoca, chocolate, doces, etc")
    console.log("Bom filme! com " + (snack))
} else{
    console.log("Escolha outro filme :(")
}
*/

// DESAFIO 2

/*
const nome = prompt("Qual o seu nome completo?")
const tipo =prompt("Para qual tipo de jogo gostaria de adquirir seus ingressos? Digite IN para jogos internacionais ou digite DO para jogos domésticos").toUpperCase()
const etapa = prompt("Para qual etapa do campeonato gostaria? Digite SF para semi-final, digite DT para disputa de terceiro lugar ou digite FI para a final").toUpperCase()
const categoria = Number(prompt("Indique a categoria desejada: 1, 2, 3 ou 4?"))
const quantidade = Number(prompt("Qual a quantidade de ingressos?"))

console.log("---Dados da compra---" )
console.log("Nome do cliente: " + (nome))

if (tipo === "IN"){
    console.log("Tipo do jogo: Internacional")
} else if (tipo === "DO"){
    console.log("Tipo do jogo: Doméstico")
} else {
    console.log("Tipo do jogo: Inexistente")
}

if (etapa === "SF"){
    console.log("Etapa do jogo: Semi-Final")
} else if (etapa === "DT"){
    console.log("Etapa do jogo: Decisão de terceiro lugar")
} else if (etapa === "FI"){
    console.log("Etapa do jogo: Final")
} else{
    console.log("Etapa do jogo: Inexistente")
}

if (categoria <= 4 && categoria > 0){
    console.log("Categoria: " + categoria)
} else{
    console.log("Categoria: Inexistente")
}

console.log("Quantidade de ingressos: " + (quantidade) + " ingressos")
console.log("---Valores---")

if (tipo === "DO" && etapa === "SF" && categoria === 1){
    console.log("Valor do ingresso: R$ 1320")
    const total = (quantidade)*1320
    console.log("Valor total: R$ " + total)
} else if (tipo === "DO" && etapa === "SF" && categoria === 2){
    console.log("Valor do ingresso: R$ 880")
    const total = (quantidade)*880
    console.log("Valor total: R$ " + total)
} else if (tipo === "DO" && etapa === "SF" && categoria === 3){
    console.log("Valor do ingresso: R$ 550")
    const total = (quantidade)*550
    console.log("Valor total: R$ " + total)
} else if (tipo === "DO" && etapa === "SF" && categoria === 4){
    console.log("Valor do ingresso: R$ 220")
    const total = (quantidade)*220
    console.log("Valor total: R$ " + total)
} 

if (tipo === "DO" && etapa === "DT" && categoria === 1){
    console.log("Valor do ingresso: R$ 660")
    const total = (quantidade)*660
    console.log("Valor total: R$ " + total)
} else if (tipo === "DO" && etapa === "DT" && categoria === 2){
    console.log("Valor do ingresso: R$ 440")
    const total = (quantidade)*440
    console.log("Valor total: R$ " + total)
} else if (tipo === "DO" && etapa === "DT" && categoria === 3){
    console.log("Valor do ingresso: R$ 330")
    const total = (quantidade)*330
    console.log("Valor total: R$ " + total)
} else if (tipo === "DO" && etapa === "DT" && categoria === 4){
    console.log("Valor do ingresso: R$ 170")
    const total = (quantidade)*170
    console.log("Valor total: R$ " + total)
} 

if (tipo === "DO" && etapa === "FI" && categoria === 1){
    console.log("Valor do ingresso: R$ 1980")
    const total = (quantidade)*1980
    console.log("Valor total: R$ " + total)
} else if (tipo === "DO" && etapa === "FI" && categoria === 2){
    console.log("Valor do ingresso: R$ 1320")
    const total = (quantidade)*1320
    console.log("Valor total: R$ " + total)
} else if (tipo === "DO" && etapa === "FI" && categoria === 3){
    console.log("Valor do ingresso: R$ 880")
    const total = (quantidade)*880
    console.log("Valor total: R$ " + total)
} else if (tipo === "DO" && etapa === "FI" && categoria === 4){
    console.log("Valor do ingresso: R$ 330")
    const total = (quantidade)*330
    console.log("Valor total: R$ " + total)
} 

if (tipo === "IN" && etapa === "SF" && categoria === 1){
    console.log("Valor do ingresso: U$ 321.95")
    const total = (quantidade)*321.95
    console.log("Valor total: U$ " + total)
} else if (tipo === "IN" && etapa === "SF" && categoria === 2){
    console.log("Valor do ingresso: U$ 214.63")
    const total = (quantidade)*214.63
    console.log("Valor total: U$ " + total)
} else if (tipo === "IN" && etapa === "SF" && categoria === 3){
    console.log("Valor do ingresso: U$ 134.14")
    const total = (quantidade)*134.14
    console.log("Valor total: U$ " + total)
} else if (tipo === "IN" && etapa === "SF" && categoria === 4){
    console.log("Valor do ingresso: U$ 53.65")
    const total = (quantidade)*53.65
    console.log("Valor total: U$ " + total)
} 

if (tipo === "IN" && etapa === "DT" && categoria === 1){
    console.log("Valor do ingresso: U$ 160.97")
    const total = (quantidade)*160.97
    console.log("Valor total: U$ " + total)
} else if (tipo === "IN" && etapa === "DT" && categoria === 2){
    console.log("Valor do ingresso: U$ 107.31")
    const total = (quantidade)*107.31
    console.log("Valor total: U$ " + total)
} else if (tipo === "IN" && etapa === "DT" && categoria === 3){
    console.log("Valor do ingresso: U$ 80.48")
    const total = (quantidade)*80.48
    console.log("Valor total: U$ " + total)
} else if (tipo === "IN" && etapa === "DT" && categoria === 4){
    console.log("Valor do ingresso: U$ 41.46")
    const total = (quantidade)*41.46
    console.log("Valor total: U$ " + total)
} 

if (tipo === "IN" && etapa === "FI" && categoria === 1){
    console.log("Valor do ingresso: U$ 482.92")
    const total = (quantidade)*482.92
    console.log("Valor total: U$ " + total)
} else if (tipo === "IN" && etapa === "FI" && categoria === 2){
    console.log("Valor do ingresso: U$ 321.95")
    const total = (quantidade)*321.95
    console.log("Valor total: U$ " + total)
} else if (tipo === "IN" && etapa === "FI" && categoria === 3){
    console.log("Valor do ingresso: U$ 214.63")
    const total = (quantidade)*214.63
    console.log("Valor total: U$ " + total)
} else if (tipo === "IN" && etapa === "FI" && categoria === 4){
    console.log("Valor do ingresso: U$ 80.48")
    const total = (quantidade)*80.48
    console.log("Valor total: U$ " + total)
} 
*/