function validar() {
    const senha = document.getElementById('senha').value;
    const msg = senha.length >= 6 ? "Senha valida" : "Minimo 6 caracteres";
    document.getElementById('alerta').innerText = msg;
}