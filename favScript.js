onload = () => {
    mostrarFavoritos()
} 
function mostrarFavoritos(){
    let conteudoFavorito = JSON.parse(localStorage.getItem('db_ids'));
    console.log(conteudoFavorito.noticiasFavoritadas)
    let html = ""
    conteudoFavorito.noticiasFavoritadas.forEach(element => {
        html += `<div >
                    ${element.author}<br>
                    ${element.description}<br>
                    ${element.title}
                    <img id="img" src="${element.urlToImage}"/>
                </div>`
    });
    document.getElementById("feed").innerHTML = html
}