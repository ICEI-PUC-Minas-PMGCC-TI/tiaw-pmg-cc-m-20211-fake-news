// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "José Helvécio de Oliveira FIlho",
            "cidade": "Belo Horizonte",
            "categoria": "Estudante de CC e programador",
            "email": "jose-helvecio@hotmail.com",
            "telefone": "38-997417574",
            "website": "fakenews."
        },
        {
            "id": 2,
            "nome": "Lucas Fiori",
            "cidade": "Belo Horizonte",
            "categoria": "Estudante de CC e programador",
            "email": "lucasfmm54@gmail.com",
            "telefone": "31998888844",
            "website": "fakenews."
        },
        {
            "id": 3,
            "nome": "Cecília Capurucho Bouchardet ",
            "cidade": "Belo Horizonte",
            "categoria": "Estudante de CC e programadora",
            "email": "cbouchardet@sga.pucminas.br",
            "telefone": "31987385555",
            "website": "fakenews."
            
        },
        {
            "id": 4,
            "nome": "João Vitor,Ferreira de Moura",
            "cidade": "Belo Horizonte",
            "categoria": "Estudante de CC e programador",
            "email": "jvfdm@hotmail.com",
            "telefone": "31983198179",
            "website": "fakenews."
            
        },
        {
            "id": 5,
            "nome": "Pedro Melo",
            "cidade": "Belo Horizonte",
            "categoria": "Estudante de CC e programador",
            "email": "pandre@sga.pucminas.br",
            "telefone": "3197004172",
            "website": "fakenews."
            
        },
        {
            "id": 6,
            "nome": "Samuel Barbosa Santos",
            "cidade": "Belo Horizonte",
            "categoria": "Estudante de CC e programador",
            "email": "samuel300701@gmail.com",
            "telefone": "31999663007",
            "website": "fakenews."
            
        },
        {
            "id": 7,
            "nome": "Enrico Menicucci",
            "cidade": "Belo Horizonte",
            "categoria": "Estudante de CC e programador",
            "email": "emgomes@sga.pucminas.br",
            "telefone": "34996769933",
            "website": "fakenews."
            
        }
        
       
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria,
        "website": contato.website
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria,
    db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}
