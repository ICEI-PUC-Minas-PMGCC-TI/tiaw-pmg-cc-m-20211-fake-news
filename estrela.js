const API_KEY = '4e5e37902954485c827ea4b751009dbe';
var id_favoritados = { "urls": [] }
var info = [];

var db_ids = {
    "noticiasFavoritadas": []
};

function exibeNoticias() {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.articles.length; i++) {
        let noticia = dados.articles[i];
        info.push(noticia) //a cada requisição todas as noticias vao para esse vetor
        let data = new Date(noticia.publishedAt);


        texto = texto + `
            <div class="box-noticia">
            <img id="img" src="${noticia.urlToImage}"
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo">${noticia.title}</span><br>
                <span class="creditos">${data.toLocaleDateString()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content} <a href="${noticia.url}">Leia mais ...</a>
                </span>
                <button class="btn-txt">Compartilhar</button> <button class="btn-txt">Comentar</button>
                <button class="fas fa-star" id=${i} onclick="favoritar(this.id)">favoritar</button>
            </div>            
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa() {
    let query = "fake-news"
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&language=pt&apiKey=${API_KEY}`);
    xhr.send();
}

function favoritar(id) {
    let noticia = info[id]

    let obj = localStorage.getItem('db_ids');
    let url = localStorage.getItem('id_favoritados')

    if (obj == null || obj == "undefined") {
        db_ids.noticiasFavoritadas.push(noticia);
        id_favoritados.urls.push(noticia.url)
    } else {
        db_ids = JSON.parse(obj);
        id_favoritados = JSON.parse(url)

        if (id_favoritados.urls.includes(noticia.url) == false) {
            db_ids.noticiasFavoritadas.push(noticia);
            id_favoritados.urls.push(noticia.url)
        }
    }

    localStorage.setItem('db_ids', JSON.stringify(db_ids));
    localStorage.setItem('id_favoritados', JSON.stringify(id_favoritados));
}

onload = () => {
    executaPesquisa()
}
function mostrarFavoritos(){
    let conteudoFavorito = JSON.parse(localStorage.getItem('db_ids'));
    console.log(conteudoFavorito)
}