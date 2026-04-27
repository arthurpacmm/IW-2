function parOuImpar() {
    const n = document.getElementById('num').value;
    const msg = n % 2 === 0 ? "Par" : "Impar";
    document.getElementById('res').innerText = msg;
}