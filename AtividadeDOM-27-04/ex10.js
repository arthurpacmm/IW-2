let total = 0;

function cadastrar() {
    const nome = document.getElementById('nomeCad').value;
    if(nome === "") return;

    const lista = document.getElementById('listaNomes');
    const li = document.createElement('li');
    
    li.innerHTML = `${nome} <button onclick="removerItem(this)">Remover</button>`;
    lista.appendChild(li);
    
    document.getElementById('nomeCad').value = "";
    atualizarContador(1);
}

function removerItem(btn) {
    btn.parentElement.remove();
    atualizarContador(-1);
}

function atualizarContador(valor) {
    total += valor;
    document.getElementById('contador').innerText = total;
}