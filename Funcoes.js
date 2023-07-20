const prompt = require(`prompt-sync`)()



function somar(a = parseInt(prompt("Por favor digite o primeiro número: ")), b = parseInt(prompt("Por favor digite o segundo número: "))) {
    return  a+b; 
}

let resultado = somar();
console.log(resultado);