alert("Bem-vindo ao sistema!");

let nome = prompt("Qual é o seu nome?");
alert("Olá, " + nome + "!");

let idade = prompt("Qual é a sua idade?");
idade = Number(idade);

while (isNaN(idade)) {
    alert("Isso não é um número válido. Digite sua idade novamente.");
    idade = Number(prompt("Qual é a sua idade?"));
}

if (idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}

let continuar = confirm("Deseja prosseguir?");

if (continuar) {

    alert("Você escolheu continuar.");

    let num1 = Number(prompt("Digite o primeiro número para uma soma:"));

    while (isNaN(num1)) {
        alert("Isso não é um número válido. Digite novamente.");
        num1 = Number(prompt("Digite o primeiro número:"));
    }
    
    let num2 = Number(prompt("Digite o segundo número:"));
    
    while (isNaN(num2)) {
        alert("Isso não é um número válido. Digite novamente.");
        num2 = Number(prompt("Digite o segundo número:"));
    }
    
    let soma = num1 + num2;
    
    alert("A soma é: " + soma);
    
    let numero = Number(prompt("Digite um número para ver seu dobro:"));

    while (isNaN(numero)) {
        alert("Isso não é um número válido. Digite novamente.");
        numero = Number(prompt("Digite um número para seu o dobro:"));
    }
    
    let dobro = numero * 2;
    alert("O dobro é: " + dobro);
    alert("Seu nome é " + nome + " e você tem " + idade + " anos.");

} else {

    alert("Programa encerrado.");

}