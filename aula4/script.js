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

// 6. Somatório
let numeroSomatorio = Number(prompt("6) Digite um número para somar de 1 até ele:"));

resultado.innerHTML += "<h2>6. Somatório</h2>";

let soma = 0;

for (let i = 1; i <= numeroSomatorio; i++) {
    soma += i;
}

resultado.innerHTML += "Resultado: " + soma + "<br>";


// 7. Número Primo
let numeroPrimo = Number(prompt("7) Digite um número para verificar se é primo:"));

resultado.innerHTML += "<h2>7. Número Primo</h2>";

let ehPrimo = true;

if (numeroPrimo < 2) {
    ehPrimo = false;
} else {
    for (let i = 2; i < numeroPrimo; i++) {
        if (numeroPrimo % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}

if (ehPrimo) {
    resultado.innerHTML += "É primo<br>";
} else {
    resultado.innerHTML += "Não é primo<br>";
}


// 8. Login Simples
resultado.innerHTML += "<h2>8. Login Simples</h2>";

let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario, senha;

do {
    usuario = prompt("Digite o usuário:");
    senha = prompt("Digite a senha:");

    if (usuario !== usuarioCorreto || senha !== senhaCorreta) {
        alert("Login incorreto! Tente novamente.");
    }

} while (usuario !== usuarioCorreto || senha !== senhaCorreta);

resultado.innerHTML += "Login realizado com sucesso!<br>";


// 9. Soma de Números Positivos
resultado.innerHTML += "<h2>9. Soma de Números Positivos</h2>";

let total = 0;
let numero;

do {
    numero = Number(prompt("Digite um número (negativo para parar):"));

    if (numero >= 0) {
        total += numero;
    }

} while (numero >= 0);

resultado.innerHTML += "Total: " + total + "<br>";


// 10. Adivinhação
resultado.innerHTML += "<h2>10. Adivinhação</h2>";

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;

do {
    palpite = Number(prompt("Adivinhe o número (1 a 10):"));

    if (palpite < numeroSecreto) {
        alert("Muito baixo!");
    } else if (palpite > numeroSecreto) {
        alert("Muito alto!");
    }

} while (palpite !== numeroSecreto);

resultado.innerHTML += "Acertou! O número era " + numeroSecreto + "<br>";


// 11. Fatorial
let numeroFatorial = Number(prompt("11) Digite um número para calcular o fatorial:"));

resultado.innerHTML += "<h2>11. Fatorial</h2>";

let fatorial = 1;

for (let i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
}

resultado.innerHTML += "Fatorial: " + fatorial + "<br>";


// 12. Validação de Nota
resultado.innerHTML += "<h2>12. Validação de Nota</h2>";

let nota;

do {
    nota = Number(prompt("Digite uma nota (0 a 10):"));
} while (nota < 0 || nota > 10);

resultado.innerHTML += "Nota válida: " + nota + "<br>";


// 13. Média de Notas
let n1 = Number(prompt("13) Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let n3 = Number(prompt("Digite a terceira nota:"));

resultado.innerHTML += "<h2>13. Média de Notas</h2>";

let media = (n1 + n2 + n3) / 3;

resultado.innerHTML += "Média: " + media + "<br>";

if (media >= 7) {
    resultado.innerHTML += "Aprovado<br>";
} else {
    resultado.innerHTML += "Reprovado<br>";
}


// 14. Caixa Eletrônico
let valor = Number(prompt("14) Digite o valor para saque:"));

resultado.innerHTML += "<h2>14. Caixa Eletrônico</h2>";

let cedulas = [100, 50, 20, 10, 5, 2, 1];

for (let i = 0; i < cedulas.length; i++) {
    let qtd = Math.floor(valor / cedulas[i]);

    if (qtd > 0) {
        resultado.innerHTML += qtd + " cédula(s) de R$" + cedulas[i] + "<br>";
        valor = valor % cedulas[i];
    }
}


// 15. Números Ímpares
let numeroImpar = Number(prompt("15) Digite um número:"));

resultado.innerHTML += "<h2>15. Números Ímpares</h2>";

for (let i = 1; i <= numeroImpar; i++) {
    if (i % 2 !== 0) {
        resultado.innerHTML += i + "<br>";
    }
}