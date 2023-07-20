import PromptSync from "prompt-sync";

import {verificarMaiorIdade} from "../Exercicios_If_Else_JS/exercicio_exF.js"

const prompt=PromptSync(); 

// exercicio = parseInt(prompt("Digite um número"))

let aluno = {
    nome: "Rebeca",
    idade: 19,
    hardskills: ["figma","HTML","CSS"]
}

//Acessando o objeto pela propriedade
console.log(aluno.idade,aluno.hardskills,aluno.nome);

//exibindo objeto inteiro
console.log("Objeto aluno",aluno);

