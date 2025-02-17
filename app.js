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
