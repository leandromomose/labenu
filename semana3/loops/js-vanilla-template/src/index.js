//Exercícios de interpretação de código
// EXERCÍCIO 1

// Resposta: Ele está pegando a variável valor que é igual a 0 e rodando o laço dizendo que enquanto o valor de outra variavel (i) que é zero, for menor que 5 ele continua rodando. Ao final, soma-se 1 à variavel valor. Porém, Após rodar o laço, ela acrescenta e coloca ao final o valor da variável (i), tornando-se 10, e como 10 é maior que 5, o laço encerra. O valor que aparece no console será 10

// EXERCÍCIO 2

// a. Será impresso no console, todos os números que forem maior que 18

// b. Acredito que não seja possível pois a variável numero me daria apenas os elementos do array. Para acessar o índice de cada elemento teria que criar um "contador".

// Exercícios de escrita de cógio

// EXERCÍCIO 3

//const arrayOriginal = [8, 91, 14, 89, 26, 75, 34, 62, 48, 53]

/*
a.

for (let array of arrayOriginal) {
    console.log(array)
}

b.

for (let array of arrayOriginal) {
    let divisao = (array)/10

    console.log(divisao)
}

c.

let arrayPares =[]

for (let array of arrayOriginal) {
    
    if (array%2 === 0){
        arrayPares.push(array)
    }    
}
        console.log(arrayPares)

d.

let i = 0
for (let array of arrayOriginal){
    console.log("O elemento do index " + i + " é " + array)
    i++
}

e.

let maiorNumero = 0
let menorNumero = 100

for(let array of arrayOriginal){
    if(array > maiorNumero){
        maiorNumero = array 
    }
}
    
for(let array of arrayOriginal){
    if(array < menorNumero){
        menorNumero = array 
    }
}
console.log("O maior número é " + maiorNumero + " e o menor é " + menorNumero)
*/
  
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)