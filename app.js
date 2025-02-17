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

