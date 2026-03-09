
alert("Bem-vindo ao sistema!");

let nome = prompt("Qual é o seu nome?");
alert("Olá, " + nome + "! Prazer em te conhecer.");

let idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
    console.log(nome + " é maior de idade.");
} else {
    console.log(nome + " é menor de idade.");
}

let continuar = confirm("Deseja prosseguir?");

if (continuar) {
    alert("Você escolheu continuar.");
} else {
    alert("Você escolheu cancelar.");
}

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let soma = num1 + num2;
alert("A soma dos números é: " + soma);

let numero = Number(prompt("Digite um número para ver o dobro:"));
let dobro = numero * 2;

alert("O dobro de " + numero + " é " + dobro);

alert("Resumo: Seu nome é " + nome + " e você tem " + idade + " anos.");