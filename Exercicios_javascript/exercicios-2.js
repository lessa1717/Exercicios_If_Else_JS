
let prompt = require('prompt-sync')()



//Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

// let nome = prompt("Por favor digite o seu nome: ")
// let senha = parseInt(prompt("Por favor digite a ua senha: "))

// if(nome == "admin" && senha == 123){
//     console.log("O login foi efetuado com sucesso")
// }else{
//     console.log("Os dados digitados sao inválidos!/n Tente novamente")
// }

// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.


// let numero = parseInt(prompt("Por favor digite um numero de 1 a 7: ")); 

// if (numero == 1) {
//     console.log("Segunda-feira")
// } else if (numero == 2) {
//     console.log("Terça-feira")
// } else if (numero == 3) {
//     console.log("Quarta-feira")
// } else if (numero == 4) {
//     console.log("Quinta-feira")
// } else if (numero == 5) {
//     console.log("Sexta-feira")
// } else if (numero == 6) {
//     console.log("Sábado")
// } else if (numero == 7) {
//     console.log("Domingo")
// }else{
//     console.log("Numero digitado é invalido, tente novamente!")
// }

// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

// let numero1 = parseInt(prompt("Por favor digite o primeiro número: "))
// let numero2 = parseInt(prompt("Por favor digite o segundo número: "))
// let numero3 = parseInt(prompt("Por favor digite o terceiro número: "))

// if(numero1< numero2 && numero2< numero3){
//     console.log("os numero estao em ordem crescente")
// }else{
//     console.log("Os numero estao fora de ordem")
// }

// Exercício 4: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

// let nome = prompt("Por favor digite seu nome: ");
// let ano = parseInt(prompt("Por favor digite o seu ano de nascimento: "));


// if(ano <= 2005){
//     console.log( "Voce é maior de idade "+nome);
// }else{
//     console.log("Voce é menor de idade "+nome);
// }


// Exercício 5: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

// let valorCompra = parseFloat(prompt("Por favor digite o valor da compra: "))


// if(valorCompra <= 100){
//     console.log("Voce nao possui desconto na sua compra")
// }else if(valorCompra >100.01 &&  valorCompra<200){
//     let desconto = valorCompra * 0.1;
//     valorCompra = valorCompra - desconto;
//     console.log("O valor da compra com o desconto foi: "+ valorCompra);
// }else if(valorCompra >200){
//     let desconto = valorCompra * 0.2;
//     valorCompra = valorCompra - desconto;
//     console.log("O valor da compra com o desconto foi: "+ valorCompra);
// }else{
//     console.log("Por favor revise os dados digitados")
// }

// Exercício 6: Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal

// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3

let peso = parseFloat(prompt("Por favor digite o seu peso: "))
let altura = parseFloat(prompt("Por favor digite a sua altura: "))

let imc = peso/(altura*altura);
let imcAtual = imc.toFixed(2);

if(imcAtual <18.5 ){
    console.log(`O seu IMC é : ${imcAtual} e voce está abaixo do peso`)
    
}else if (imcAtual>18.5 && imcAtual<=24.9){
    console.log(`O seu IMC é : ${imcAtual} e voce está peso normal`)

}else if(imcAtual >= 25.0 && imc <=29.9){
    console.log(`O seu IMC é : ${imcAtual} e voce está sobrepeso`)
}else if(imcAtual >= 30 && imcAtual <=34.9){
    console.log(`O seu IMC é : ${imcAtual} e voce está obesidade grau 1`)
}else if(imcAtual >= 35 && imc <=39.9){
    console.log(`O seu IMC é : ${imcAtual} e voce está obesidade grau 2`)
}else if(imcAtual>=40.0){
    console.log(`O seu IMC é : ${imcAtual} e voce está obesidade grau 3`)
}else{
    console.log("Por favor revise os dados")
}




