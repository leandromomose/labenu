// a- Ela não permite pois a tipagem está declarada errada

// const minhaString: string = 25

// b- Temos que usar o union type, inserindo uma | entre os tipos

// const meuNumero: number | string = 34

// c- Declarando uma variável de tipo

// type infosPerson = {
//     nome: string, 
//     idade: number, 
//     corFavorita: string
// }

// const person: infosPerson = {
//     nome: "Leandro",
//     idade: 34,
//     corFavorita: "azul"
// }

// d- 

// const astrodev: infosPerson = {
//     nome: "Astrodev",
//     idade: 948,
//     corFavorita: "azul estrelar"
// }

// const pernalonga: infosPerson = {
//     nome: "Pernalonga",
//     idade: 87,
//     corFavorita: "cinza"
// }

// const romario: infosPerson = {
//     nome: "Romario",
//     idade: 62,
//     corFavorita: "verde"
// }

// e- 

type infosPerson = {
    nome: string, 
    idade: number, 
    corFavorita: string
}