let arrayDeObjetos = []

function criarPost(){
    const inputTitulo = document.getElementById("titulo-post")
    const inputAutor = document.getElementById("autor-post")
    const inputConteudo = document.getElementById("conteudo-post")
    const novoPost = document.getElementById("container-de-posts")

    const post = {
        titulo: inputTitulo.value,
        autor: inputAutor.value,
        conteudo: inputConteudo.value
    }

    arrayDeObjetos = [...arrayDeObjetos, post]
    
    novoPost.innerHTML += `<h1>${post.titulo}</h1>`
    novoPost.innerHTML += `<h2>${post.autor}</h2>`
    novoPost.innerHTML += `<p>${post.conteudo}</p>`
}   


    

    



