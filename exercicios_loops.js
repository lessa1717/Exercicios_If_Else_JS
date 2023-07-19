const prompt = require(`prompt-sync`)()


let numero ;

do {
    console.log(`

FOR

1. Imprimir números de 1 a 10 utilizando o loop for
2. Imprimir números pares de 1 a 10.
3. Faça um programa que imprima os números ímpares de 0 a 50;
4. Faça um programa que imprima na tela a tabuada de um número
qualquer escolhido pelo usuário até o 10.
5. Imprimir os primeiros 10 números da sequência de Fibonacci.

WHILE

6. Imprimir números pares de 0 a 20 utilizando o loop while
7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
while.
8. Faça um programa que receba a idade do usuário, enquanto a
resposta do usuário for menor que 18 anos continue a solicitar a
idade e mostre uma mensagem quando a idade do usuário for
maior que 18.
9. Faça um programa que receba um número do usuário e mostre
no console a contagem regressiva até 0.
10. Faça um programa que receba um número do usuário e continue
a pedir o número se o numero for diferente de 0.

`);


numero = parseInt(prompt("Por favor escolha um exercício de 0 a 10: "))

switch (numero) {
    case 1:
        // Exercicio 01

for (let contador = 0; contador <=10 ; contador++) {
    console.log(contador)
}
        break;
    case 2:
// Exercicio 02

for(let pares=0; pares<=10; ++pares){  

    if(pares%2==0)  

        console.log(pares)  
}
break;
case 3:
// Exercicio 03

for(let impares=0; impares<=50; ++impares){  

        if(impares%2!=0)  
    
            console.log(impares)  
    }
    break;


case 4:
// Exercicio 04

let numero = parseInt(prompt("Digite um número de 0 a 10: /n"))


for(let tabuada=1; tabuada<=10 ; tabuada++)
console.log(numero, "x"+tabuada+" = " + (numero*tabuada) )


break;

case 5:
 //Exercicio - 05
let penultimo = 0;
let ultimo = 1;
let numeroFinal;

for(let fibonacci=0 ; fibonacci<=10 ; fibonacci++){
    numeroFinal = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numeroFinal;
    console.log(numeroFinal);
}
break;

case 6:
//Exercicio 06

let  numeroPar =0 ;

while (numeroPar<=20) {

        console.log(numeroPar);
        numeroPar +=2;
}
break;

case 7:
//Exercicio 07

let numero1 = 0 ;
let numero2 = 1;

while (numero2<=100) {

    numero1 += numero2

    numero2++
    console.log(numero1);

}
break;

case 8:
//Exercicio 08

let idade = parseInt(prompt("Digite sua Idade: "))

while (idade<18) {
    console.log("Por favor digite novamente sua idade!");
    idade = parseInt(prompt("Digite sua Idade: "));
}
console.log("Voce é maior de idade!");


break;
case 9:
//Exercicio 09

let numeroRegressivo = parseInt(prompt("Digite um numero: "))
while (numeroRegressivo!=-1) {
console.log(numeroRegressivo--)
} console.log("A contagem regressiva foi finalizada");

case 10:
//Exercicio 10

let numeroRepetido;

do {
    
    numeroRepetido = parseInt(prompt("Digite um numero: "))

} while (numeroRepetido != 0);


default:
        break;
}

} while (numero>10);