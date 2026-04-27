function checarIdade() {
    const idade = document.getElementById('idade').value;
    const msg = idade >= 18 ? "Maior de idade" : "Menor de idade";
    document.getElementById('status').innerText = msg;
}