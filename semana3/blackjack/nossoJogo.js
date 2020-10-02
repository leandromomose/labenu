/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log("Bem vindo(a) ao jogo de Blackjack!")

 if(confirm("Quer inciar uma nova rodada?")) {

   const usuario1 = comprarCarta()
   const usuario2 = comprarCarta()

   console.log("Usuário - cartas: " + (usuario1.texto) + " " + (usuario2.texto) ," - pontuação " + (usuario1.valor + usuario2.valor))

   const computador1 = comprarCarta()
   const computador2 = comprarCarta()

   console.log("Computador - cartas: " + (computador1.texto) + " " + (computador2.texto) ," - pontuação " + (computador1.valor + computador2.valor))

   usuarioValorTotal = (usuario1.valor + usuario2.valor)
   computadorValorTotal = (computador1.valor + computador2.valor)

 if (usuarioValorTotal === computadorValorTotal){
      console.log("Empatou!")
   } else if (usuarioValorTotal < computadorValorTotal){
      console.log("O computador ganhou!")
   } else if (usuarioValorTotal > computadorValorTotal){
      console.log("O usuário ganhou!")
   }

}else {
   console.log("O jogo acabou!") 
}








