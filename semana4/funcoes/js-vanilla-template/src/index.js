// Exercícios de interpretação de código

// EXERCÍCIO 1 

// a. Será impresso no console o retorno da variável multiplicado por 5, ou seja, quando o valor da variável é 2, ele imprimirá o valor 10 e quando o valor da variável for 10 ele imprimirá o valor 50. 

// b. Não aconteceria nada pois não tem nada armazenado na variável. Não imprimiria nada no console

// EXERCÍCIO 2

// a. Serão impressos no console apenas os 2 primeiros nomes da arrayDeNomes (Darvas e Caio) pois está pedindo para imprimir apenas os índices da array que forem menores que o índice 2, ou seja, os índices 0 e 1.

//b. Será impresso todos os nomes da array (Amanda e Caio), pois a array possui somente 2 nomes e está pedindo para imprimir os índices menores do que 2, ou seja, os índices 0 e 1.

// EXERCÍCIO 3

// Ela recebe uma array e para todos os números pares desta array, ele devolve uma array nova (arrayFinal) com esse valor par, multiplicado por ele mesmo e o insere nesta nova array. Sugestão de nome: numerosParesAoQuadrado

// Exercícios de escrita de código

// EXERCÍCIO 4

// a.

/* 

function leandro(){
    console.log("Eu sou o Leandro, tenho 34 anos, moro em Belo Horizonte e sou estudante")
}

leandro() 


// b.


let infosPessoais = (nome, idade, cidade, estudante) => {

    console.log("Eu sou " + (nome) + ", tenho " + (idade) + " anos,  moro em " + (cidade) + " e " + (estudante) + " estudante." )
}
    let nome = "Leandro"
    let idade = 34
    let cidade = "Belo Horizonte"
    let estudante = true

    if (estudante === true){
        estudante = "sou"
    } else{
        estudante = "não sou"
    }

    infosPessoais (nome, idade, cidade, estudante) 
    
    */

// EXERCÍCIO 5

/*

a.

let numeros = (a, b) => {
    return a+b 
}

const resultado = numeros(8, 23)
console.log(resultado)

b.

let numeros = (a, b) =>{
    if (a >= b){
        return true
    } else{
        return false
    }
}

const resposta = numeros(8, 23)
console.log(resposta)

c.

let mensagem = (a) => {
    for(let i = 0; i < 10; i++){
        console.log(a)
    }
}

let imprime = mensagem ("Vamo que vamo")
    
*/

// EXERCÍCIO 6

//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

/* 

a.

let arrayDeNumeros = (array) => {
    return array.length
}

let quantidadeDeElementos = array.length
console.log(quantidadeDeElementos) 

b.

let checarNumeroPar = (numero) =>{
    if(numero % 2 === 0){
        return true
    } else{
        return false
    }
}

let resposta = checarNumeroPar (5)
console.log(resposta)

c.

let tamanhoArrayPar = (array) => {
    let arrayPar = []
    for (let i = 0; i < array.length ;i++) {
        if (array % 2 === 0){
            arrayPar.push(array[i])
        }  
    }
    return arrayPar.length   
}
let novaArrayPar = tamanhoArrayPar(array)
console.log(novaArrayPar)

d.

let verificaParidade = (arrayPar) => {
    for (let i = 0; i < arrayPar.length ;i++) {
        if (arrayPar % 2 === 0){
            return true
        } else{
            return false
        }
    }   
}
let verifica = vericaParidade(arrayPar)
console.log(verifica)

*/