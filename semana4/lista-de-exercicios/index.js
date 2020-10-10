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