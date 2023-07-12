
let prompt = require('prompt-sync')()


// let nome = prompt("Digite seu nome por favor:")
// let cargo = prompt("Digite seu cargo por favor:")
// let salario = parseFloat(prompt("Digite seu salário por favor:"))

// if(salario < 1000){
//     let acrescimo = salario * 1.1
//     console.log("Seu nome é: "+nome ,"e o seu cargo é: " +cargo ,"e o seu salario com acrescimo de 10% é: "+acrescimo)
// }else{
//     console.log("Seu nome é :"+nome ,"e o seu cargo é : " +cargo ,"e o seu salário é igual ou maior que $1000 "+salario)
// }


// let salario = parseFloat(prompt("Digite seu salário por favor:"))
// if(salario<500){
//     let acrescimo = salario * 1.3
//     console.log("seu salário com acrescimo de 30% é: "+acrescimo)
// }else{
//     console.log("o seu salário está acima de $500 entáo voce náo tem aumento")
// }

// let numero = prompt("Digite um número: ")

// if(numero >1){
//     console.log("O numero é positivo")
// }else{
//     console.log("o Número é zero ou negativo")
// }

// let numero = parseInt(prompt("Digite um número por favor: "))
// let resultado = numero % 2 

// if(resultado == 0){
//     console.log(resultado , "O número é par")
// }else{
//     console.log(resultado ,"O número náo é par")
// }

// let numero1 = parseInt(prompt("Digite o primeiro número: "))
// let numero2 = parseInt(prompt("Digite o segundo número: "))

// if(numero1>numero2){
//     console.log("O primeiro número é o maior")
// }else{
//     console.log("O segundo número é o maior")
// }

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let nota4 = parseFloat(prompt("Digite a quarta nota: "))

let mediaAritmetica = parseFloat(nota1+nota2+nota3+nota4)/4;

if(mediaAritmetica >=7 ){
    console.log("Parabéns Voce foi Aprovado");
}else if(mediaAritmetica <7 && mediaAritmetica >=5){
    console.log("Voce está na Recuperacao");
}else
{
    console.log("Voce foi Reprovado")
}

