"use strict";
const nameInput = document.getElementById("name");
const btnName = document.getElementById("btn-name");
function printName(name, frase, imprimir) {
    if (imprimir) {
        return console.log(frase + name);
    }
    return console.log("Não foi permitido!");
}
let frase = "Seu nome é: ";
let imprimir = true;
if (btnName) {
    btnName.addEventListener("click", () => {
        printName(nameInput.value, frase, imprimir);
    });
}
//Ojetos, variáveis e enum
const person = {
    name: "Christian",
    age: 33,
    profissao: "developer",
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["teacher"] = 0] = "teacher";
    Profissao[Profissao["developer"] = 1] = "developer";
    Profissao[Profissao["doctor"] = 2] = "doctor";
    Profissao[Profissao["artist"] = 3] = "artist";
})(Profissao || (Profissao = {}));
const person1 = {
    name: 'Christian',
    age: 33,
    profissao: Profissao.developer
};
console.log(person1);
const aluno1 = {
    name: 'Gabriel',
    age: 15,
    profissao: Profissao.teacher,
    materia: ['Protuguês', 'Matemática', 'Programação'],
    nota: [9, 7, 6]
};
function list(list) {
    for (const item of list) {
        console.log('-', item);
    }
}
console.log(aluno1);
list(aluno1.materia);
//Variável any
let valorAny;
valorAny = true;
//String
valorAny = 'Christian';
let numero = 33;
console.log('Teste de varáveis: ', numero);
//Número definido como number 
numero = valorAny;
console.log('Variável definido como number: ', numero);
