function criarTarefa(){
    const novaTarefa = document.getElementById("tarefa")
    const diaEscolhido = document.getElementById("dias-semana").value
    const tarefaAdicionada = document.getElementById(diaEscolhido)

    if (novaTarefa.value !== ""){
        tarefaAdicionada.innerHTML += `<li>${novaTarefa.value}</li>`
        novaTarefa.value = ""
    } else{
        alert("Você não adicionou nenhuma tarefa!")
    }
}
