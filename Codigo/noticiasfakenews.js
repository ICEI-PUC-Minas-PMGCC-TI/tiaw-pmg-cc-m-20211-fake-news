const API_KEY = '4e5e37902954485c827ea4b751009dbe';

function exibeNoticias () {
    let divTela = document.getElementById('noticia');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
        <div class="row">
        <div class="img-nov col-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 d-flex align-items-center justify-content-center" >
            <img class="imagem" src="${noticia.urlToImage}" alt="" style="width: 100%" height = "150">
        </div>
        <div class="div-barra col-12 col-sm-12 col-md-12 col-lg-9 col-xl-8">
            <h1 class="titulo-novidade">${noticia.title} - ${data.toLocaleDateString ()}</h1>
            <p>${noticia.source.name} - ${noticia.author}</p>
            <p class="textin-nov">${noticia.content}</p>
            <a href="${noticia.url}">Leia mais ...</a>
            <button class="btn-txt">Compartilhar</button> <button class="btn-txt">Comentar</button>
            <button class="btn-star"><i class="fas fa-star">Favoritar</i></button>
        </div>
        <hr>
    </div>           
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    let query = "fake-news"
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&language=pt&apiKey=${API_KEY}`);
    xhr.send ();
}

onload = () => {executaPesquisa()}
