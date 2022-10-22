function adicionaItem() {

    let novoContainer = document.getElementById("container")
    let novoArticle = document.createElement("article")
    novoArticle.classList.add("item")
    novoContainer.insertAdjacentElement("beforeend", novoArticle)
    
}

function removeItem(event) {
    event.target.remove()
}

