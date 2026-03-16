let resultado = document.getElementById("resultado");


// 1. Par ou Ímpar
let numeroParImpar = Number(prompt("1) Digite um número para verificar se é par ou ímpar:"));

resultado.innerHTML += "<h2>1. Par ou Ímpar</h2>";

if (numeroParImpar % 2 === 0) {
    resultado.innerHTML += "O número é PAR<br>";
} else {
    resultado.innerHTML += "O número é ÍMPAR<br>";
}


// 2. Verificação de Maioridade
let idadeUsuario = Number(prompt("2) Digite sua idade:"));

resultado.innerHTML += "<h2>2. Verificação de Maioridade</h2>";

if (idadeUsuario >= 18) {
    resultado.innerHTML += "Você é maior de idade<br>";
} else {
    resultado.innerHTML += "Você é menor de idade<br>";
}


// 3. Contagem de 1 a 10
resultado.innerHTML += "<h2>3. Contagem de 1 a 10</h2>";

for (let i = 1; i <= 10; i++) {
    resultado.innerHTML += i + "<br>";
}


// 4. Contagem Regressiva
let numeroInicial = Number(prompt("4) Digite um número para iniciar a contagem regressiva:"));

resultado.innerHTML += "<h2>4. Contagem Regressiva</h2>";

while (numeroInicial >= 0) {
    resultado.innerHTML += numeroInicial + "<br>";
    numeroInicial--;
}


// 5. Tabuada
let numeroTabuada = Number(prompt("5) Digite um número para ver a tabuada:"));

resultado.innerHTML += "<h2>5. Tabuada</h2>";

for (let i = 1; i <= 10; i++) {
    resultado.innerHTML += numeroTabuada + " x " + i + " = " + (numeroTabuada * i) + "<br>";
}