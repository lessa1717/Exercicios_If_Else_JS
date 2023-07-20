// function verificarMaiorIdade() {
//     console.log(`8. Faça um programa que receba a idade do usuário, enquanto a
//         resposta do usuário for menor que 18 anos continue a solicitar a
//         idade e mostre uma mensagem quando a idade do usuário for
//         maior que 18.`);
//     let pessoa = {
//         nome: "",
//         idade: 0

//     }
//     console.log("Sua idade deve ser maior que 18. ");

//     do {
//         pessoa.idade = parseInt(prompt("Digite sua Idade: "))
//         pessoa.nome = prompt("Digite sua nome: ")

//     } while (pessoa.idade < 18);
//     // console.log("Por favor digite novamente sua idade!")
//     console.log("Voce é maior de idade!");
//     console.log("objeto", pessoa);
//     console.log(`${pessoa.nome},sua idade ${pessoa.idade},é valida!`);
// }


import PromptSync from "prompt-sync";




const prompt=PromptSync(); 

export function verificarMaiorIdade() {
    console.log("Exercício 5 - Faça um programa que receba nome e idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18");

    let pessoa = {
        nome: "",
        idade: 0
    }


    console.log("Sua idade deve ser maior que 18.");

    do {
        pessoa.idade = parseInt(prompt("Digite sua idade: "));
        pessoa.nome = prompt("Digite seu nome: ");

    } while (pessoa.idade < 18);
    console.log("Idade válida!");
    console.log("Objeto:", pessoa);
    console.log(`${pessoa.nome}, sua idade ${pessoa.idade}, é válida!`);

}