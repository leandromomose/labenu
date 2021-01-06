// a - As entradas são os numeros (a, b) e as saídas são as estatísticas (maior, menor e media)

// function obterEstatisticas(numeros: number){

//     const numerosOrdenados = numeros.sort(
//         (a: number, b: number) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// b- As variaveis numerosOrdenados, som e estatisticas

// function obterEstatisticas(numeros: number){

//     const numerosOrdenados: number = numeros.sort(
//         (a: number, b: number) => a - b
//     )

//     let soma: number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas: {maior: number, menor: number, media: number} = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// c- 

// type amostra = {
//     numeros: number = (a: number, b: number)
//     obterEstatisticas: (numeros: number) => {}
// }