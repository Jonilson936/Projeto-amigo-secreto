let nome = [];

function adicionarAmigo() {
    let amigos = document.getElementById('amigo').value;
    if (amigos) {
        nome.push(amigos);
        document.getElementById('amigo').value = '';
        exibirAmigos();
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function exibirAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    for (let amigo of nome) {
        const li = document.createElement('li');
        li.textContent = amigo; 
        listaAmigos.appendChild(li); 
    }
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (nome.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * nome.length);
        const amigoSorteado = nome[indiceAleatorio];
        
        const li = document.createElement('li');
        li.textContent = `Amigo secreto sorteado é: ${amigoSorteado}.`;
        resultado.appendChild(li);

    } else {
        alert("Não há amigos para sortear.");
    }
}
