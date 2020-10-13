//Exercícios de interpretação de código

// 1.
// É uma função para conversão de dolar em reais, onde existe uma variável que é o conversorDeMoeda e a cotação do dolar é informado pelo usuário através de um prompt e é retornado o valor convertido em reais, fazendo a operação, valor em dolar multiplicado pela cotação informada pelo usuário. Quando a variável meuDinheiro é informada é igual o conversorDeMoeda com o valorEmDolar 100, o console imprimirá o valor da variável meuDinheiro que será o resultado da multiplicação de 100 com o valor da cotação informada pelo usuário. Ficando assim: R$ (100*cotação(que é o valor informado pelo usuário)) 

// 2.
// É uma função que possui uma variável investeDinheiro e possui dois parâmetros como referência, o tipoDeInvestimento e o valor e existe também uma variável valorAposInvestimento, que a princípio está sem valor informado e que será o retorno dessa função. Dentro da função existe um switch case com alguns tipos de investimentos e o cálculo a ser realizado caso esse tipo seja chamado. Duas variáveis são criadas, novoMontante e segundoMontante e eles são iguais a variável investeDinheiro com os parâmetros agora definidos. No caso do novoMontante, ele vai rodar o switch case e encontrar o parâmetro Ações e o valor, então a variável valorAposInvestimento será igual ao valor informado, no caso, 150*1.1 e quando der um console.log, o valor que aparecerá no console será 165. No caso do segundoMontante, ele irá rodar o switch case e não encontrará o parâmetro informado tesouro direto, então ele gerará um alert para o usuário com os dizeres: TIPO DE INVESTIMENTO INFORMADO INCORRETO! E quando der um console.log, aparecerá no console como indefino, pois o valor 200 informado não tem um parâmetro par fazer algum cálculo.

// 3.
// Existe uma variável, que no caso é uma array de números e existem outras duas arrays, que a princípio estão vazias. o loop diz que para cada número da array de números, caso o número quando dividido por 2 tiver o resto igual a 0, ou seja, caso seja um número par, ele adiciona este número no final da array1, senão, caso o resto desse número, quando dividido por 2 não seja igual a 0, ele adiciona esse número no final da array2. Fazendo isto, com todos os números dentro da array numeros. O primeiro console.log pede uma frase com o tamanho da array, então apareceria no console: Quantidade total de números, 14. O segundo console.log imprime o tomanho da array1, no caso, a array de números pares: 6 e o terceiro console.log imprime o tamanho da array2, no caso, a array de números ímpares: 8

//4.
// Existe uma variável chamada numeros, que é uma array com vários elementos (números) e existem outras duas variáveis, numero1 que tem como valor infinito e numero2 que tem valor 0. O primeiro loop diz que para cada elemento do array numeros, se este elemento for menor que o valor da variável numero1, essa variável assume o valor do elemento. O laço percorre toda a array fazendo a comparação e o valor da variável assumida será então o menor valor encontrado dentro dessa array. Então um console.log para a variável numero1 será: -10. O segundo if diz que para cada elemento do array, se o elemento for maior que a variável numero2, começando com o valor dela sendo 0, essa variável assume o valor do elemento. Então, percorrendo tada a array, a variável sempre assumirá o maior valor do elemento dentro da array. Dando um console.log na variável numero2, o valor impresso será: 1590

// Exercícios de lógica de programação

// 1.
// Para percorrer/iterar uma lista, podemos usar o loop, e 3 maneiras de se fazer isso é utulizando: - while, - for, - for of. 
//  const numeros = [1, 16, 29,45]

// let i = 0
// while (i < 4){
//    console.log(i)
//    i++
// }

// for (let i = 0; i < 4; i++){
//   const elemento = numeros[i]
//   console.log(elemento)
// }

// for (let numero of numeros){
//     console.log(numero)
// }

// 2. 
// a. false
// b. true
// c. true
// d. true
// e. true

// 3. 
// Este código não funciona pois não existe um incremento para o while e a variável não possui nenhum parâmetro.

// let quantidadeDeNumerosPares = (nPrimeirosNumerosPares) => {
//     let i = 0
//     while(i < nPrimeirosNumerosPares) {
//     console.log(i*2)
//     i++
//     }
// }
// quantidadeDeNumerosPares(5)

// 4.
// let trianguloTipo = (a, b, c) =>{
//     if (a === b && b === c){
//         console.log("O triângulo é Equilátero")
//     } else if (a === b && b !== c){
//         console.log("O triângulo é Isósceles")
//     } else if (a !== b && b !== c){
//         console.log("O triângulo é Escaleno")
//     }
// }

// trianguloTipo(5, 8, 10)

// 5. 
// let doisNumeros = (a, b) => {
//     if (a > b){
//         console.log(`O maior número é ${a}`)
//     } else if (a < b){
//         console.log(`O maior número é ${b}`)
//     }

//     if (a % b !== 0 && b % a === 0 ){
//         console.log(`${a} não é divisível por ${b} `)
//         console.log(`${b} é divisível por ${a} `)
//     } else if (a % b === 0 || b % a !== 0){
//         console.log(`${a} é divisível por ${b}`)
//         console.log(`${b} não é divisível por ${a}`)
//     }

//     if (a > b){
//         console.log(`A diferença entre eles é ${a-b}`)
//     } else if (a < b){
//         console.log(`A diferença entre eles é ${b-a}`)
//     }
// }
// doisNumeros(15, 30)

// Exercícios de Funções
// 1.

// let array = [4, 8, 20, 89, 86, 83]

// let maior = 0
// let segundoMaior = 0

// for (let numero of array){
//     if (numero > maior){
//         maior = numero
//     }
// }

// for (let numero of array){
//     if (numero > segundoMaior && numero !== maior){
//         segundoMaior = numero
//     }
// }
// console.log(segundoMaior)

// let menor = Infinity
// let segundoMenor = Infinity

// for (let numero of array){
//     if (numero < menor){
//         menor = numero
//     }
// }

// for (let numero of array){
//     if (numero < segundoMenor && numero !== menor){
//         segundoMenor = numero
//     }
// }
// console.log(segundoMenor)

// 2.

// let mensagem = () => {
//      alert("Hello Labenu!")
// }

// const chamada = mensagem()

// Exercícios de Objetos

// 1. Array é uma sequência não ordenada de elementos, que podem ser diferentes ou não entre si e que temos acesso através do seu índice. Podemos utilizá-la, quando quisermos guardar mais de uma informação ao mesmo tempo. Objetos, são uma estrutura de sitaxe, código, onde conseguimos representar dados mais complexos de uma maneira mais organizada. Através da sua estrutura, conseguimos ter uma propriedade que terá a sua chave e o seu valor. Em outras palavras, utilizamos array quando precisarmos apenas armazenar mais de uma informação, sem nos preocupar com a organização dessas informações, e utilizamos objetos, quando precisarmos ter uma estrutura mais organizada de informações.

// 2. 

// const criaRetangulo = (lado1, lado2) => {
//     const retangulo = {
//         largura: lado1,
//         altura: lado2,
//         primeto: 2*(lado1 + lado2),
//         area: lado1 * lado2
//     }
//     return retangulo
// }

// criaRetangulo(10, 20)

// 3. 

// const meuFilmeFavorito = {
//     titulo: "Seven Pounds",
//     ano: 2008,
//     diretor: "Gabriele Muccino",
//     cast: ["Will smith", " Rosario Dawson", " Woody Harrelson", " Michael Ealy"] 
// }

// console.log(`Venha assistir ao filme ${meuFilmeFavorito.titulo}, de ${meuFilmeFavorito.ano}, dirigido por ${meuFilmeFavorito.diretor} e etrelado por ${meuFilmeFavorito.cast}`)

// 4. 

// const pessoa = {
//     nome: "Leandro",
//     idade: 34,
//     email: "leandro@gmail.com",
//     endereco: "BH"
// }

// function anonimizarPessoa(){
//     const pessoaAnonima = {
//         ...pessoa,
//         nome:"ANÔNIMO"
//     }
//     return pessoaAnonima
// }

// console.log(anonimizarPessoa)

// Exercícios de Funções de array

// 1. 

// let pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// a.

// const adultos = pessoas.filter((pessoa, index, array) => {
//     return pessoa.idade >= 20
// })

// console.log(adultos)

// b.

// const criancas = pessoas.filter((pessoa, index, array) => {
//     return pessoa.idade < 20
// })

// console.log(criancas)

// 2.

// const array = [1, 2, 3, 4, 5, 6]

// a.

// const arrayDobro = array.map((numero) => {
//     return numero*2 
// })

// console.log(arrayDobro)

// b.

// const arrayTriplaString = array.map((numero, index, array) => {
//     return `${numero*3}`
// })

// console.log(arrayTriplaString)

// c.

// const parOuImpar = array.map((numero, index, array) => {
//     if (numero % 2 === 0){
//         return `${numero} é par`
//     } else if (numero % 2 !== 0){
//         return `${numero} é ímpar`
//     }
// })

// console.log(parOuImpar)

// 3.

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// a.

// const regraParaEntrada = pessoas.filter ((pessoa) => {
//     return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
// })

// console.log(regraParaEntrada)

// b.

// const naoPodem = pessoas.filter((pessoa) => {
//     return pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60
// })

// console.log(naoPodem)

// 4.

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// consultas.forEach ((pessoa) => {
//     if (consultas.genero === "masculino"){
//         consultas.nome = `Sr. ${nome}` 
//     } else if (consultas.genero === "feminino"){
//         consultas.nome = `Sra. ${nome}`
// }
// })

// const emailAutomatico = consultas.map ((pessoa) => {

//     if (pessoa.cancelada === false){
//         return `Olá, ${pessoa.nome}. Estamos enviando esta mensagem para da consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
//     } 
    
//     if (pessoa.cancelada === true){
//         return `Olá, ${pessoa.nome}. Infelizmente, sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
//     }
// })

// console.log (emailAutomatico)

// 5. 

// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// contas.forEach((cliente) => {
//     let soma = 0

//     for (let compra of cliente.compras) {
//         soma += compra
//     }
//     cliente.saldoTotal -= soma
//    for (let i = 0; i < cliente.compras.length; i++) {
//     soma += cliente.compras[i]              
//    }
//    console.log(soma)
// })
