onload = () => {
    mostrarFavoritos()
} 
function mostrarFavoritos(){
    let conteudoFavorito = JSON.parse(localStorage.getItem('db_ids'));
    console.log(conteudoFavorito.noticiasFavoritadas)
    let html = ""
    conteudoFavorito.noticiasFavoritadas.forEach(element => {
        console.log(element)
        html +=  `<div class="favoritos">

        <img id="imagens" src="${element.urlToImage}"
            <img src="${element.urlToImage}" alt="">
            <span class="titulo2">${element.title}</span>
            <span class="creditos2"> - 
                ${element.source.name} - 
                ${element.author}</span>
            <span class="text2">
            ${element.content} <a href="${element.url}">Leia mais ...</a>
            </span>
            
        </div>`            

    });

    document.getElementById("feed").innerHTML = html
}