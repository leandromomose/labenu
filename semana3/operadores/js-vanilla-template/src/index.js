// Exercícios de interpretação de código

// 1. 

/*
a. false
b. false
c. true
e. boolean
*/

// 2.

/*
a. undefined
b. null
c. 11
d. 3
e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/

// Exercícios de escrita de código

// 1.a.

let idade = prompt("Qual é a sua idade?")
idade = Number(idade)
console.log(idade)
//console.log( typeof idade)

// 1.b.

let idadeAmigo = prompt("Qual a idade do seu/sua melhor amigo(a)?")
idadeAmigo = Number(idadeAmigo)
console.log(idadeAmigo)
//console.log(typeof idadeAmigo)

// 1.c.

console.log("Sua idade é maior do que a do seu melhor amigo?")

let mensagem = (idade > idadeAmigo)
console.log(mensagem)

// 1.d.

let diferenca = Number(idade) - Number(idadeAmigo)
console.log(diferenca)

// 2.a.

let par = prompt("Escolha um número par!")
par = Number(par)
console.log(par)
//console.log(typeof par)

// 2.b.

let resto = par % 2
console.log(resto)

// 2.c. 

// O padrão é sempre 0 pois não há como haver resto em divisões de números pares pelo número 2

// 2.d.

// O resto será sempre 1 pois qualquer número ímpar dividido pelo número 2 terá 1 como resto

// 3.a.

let listaDeTarefas = []

// 3.b.

let tarefa1 = prompt("Liste 3 tarefas que você precisar realizar hoje, tarefa 1:")
let tarefa2 = prompt("Tarefa 2:")
let tarefa3 = prompt("Tarefa 3")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

// 3.c.

console.log(listaDeTarefas)

// 3.d.

let tarefaRealizada = prompt("Informe qual das 3 tarefas você já realizou, sendo tarefa 1 = 0, tarefa 2 = 1 e tarefa 3 = 2")

// 3.e.

listaDeTarefas.splice(tarefaRealizada, 1)

// 3.f.

console.log(listaDeTarefas)

// 4.

let nomeDoUsuario = prompt("Qual é o seu nome?")
let emailDoUsuario = prompt("Qual é o seu email")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!")

// Desafios Extras

// 1.a.

let grausFahrenheit = 77
let kelvin = (grausFahrenheit - 32)*5/9 + 273.15
kelvin = Number(kelvin)
console.log(kelvin + "K")

// 1.b.

let grausCelsius = 80
let fahrenheit = (grausCelsius)*9/5 + 32
fahrenheit = Number(fahrenheit)
console.log(fahrenheit + "F")

// 1.c.

let celsius = prompt("Insira a temperatura em graus Celsius que deseja converter:")
let fahRenheit = (celsius)*9/5 + 32
fahRenheit = Number(fahRenheit)
let kelVin = (fahRenheit - 32)*5/9 + 273.15
kelVin = Number(kelVin)
console.log(fahRenheit + "F", kelVin + "K")

// 1.d.

// Substitui 30 pelo prompt

// 2.a.

let quilowattHora = 0.05
let residencia = (quilowattHora*280)
residencia = Number(residencia)
console.log("R$" + residencia)

// 2.b.

let desconto = (residencia - (residencia*0.15))
desconto = Number(desconto)
console.log("R$" + desconto)

//3.a.

let lb = prompt("Qual o valor em lb gostaria de convertar para kg?")
let kg = (lb/2.205)
console.log(lb + "lb equivalem a " + kg + "kg")

// 3.b.

let oz = 10.5
let kg1 = (oz/35.274)
console.log("10.5oz equivalem a " + kg1 + "kg")

// 3.c.

let mi = 100
let m = (mi*1609)
console.log("100mi equivalem a " + m + "m")

// 3.d.

let ft = 50
let m1 = (ft/3.281)
console.log("50ft equivalem a " + m1 + "m")

// 3.e.

let gal = 103.56
let l = (gal*3.785)
console.log("103.56gal equivalem a " + l + "l")

// 3.f.

let xic = 450
let l1 = (xic = xic*(6/25))
console.log("450xic equivalem a " + l1 + "l")

// 3.g.

// substitui no a. lb = 20 pelo prompt
