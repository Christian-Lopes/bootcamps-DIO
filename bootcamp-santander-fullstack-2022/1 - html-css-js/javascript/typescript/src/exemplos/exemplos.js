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
    name: "Christian",
    age: 33,
    profissao: Profissao.developer,
};
console.log(person1);
const aluno1 = {
    name: "Gabriel",
    age: 15,
    profissao: Profissao.teacher,
    materia: ["Protuguês", "Matemática", "Programação"],
    nota: [9, 7, 6],
};
function list(list) {
    for (const item of list) {
        console.log("-", item);
    }
}
console.log(aluno1);
list(aluno1.materia);
//Variável any
let valorAny;
valorAny = true;
//String
valorAny = "Christian";
let numero = 33;
console.log("Teste de varáveis: ", numero);
//Número definido como number
numero = valorAny;
console.log("Variável definido como number: ", numero);
//Definição de tipos de variáveis personalizadas
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
let soma = document.getElementById("soma");
function somar(number1, number2) {
    if (typeof number1 === "string" && typeof number2 === "string") {
        return `Palavras enviadas: ${number1} e ${number2}`;
    }
    else {
        return Number(number1) + Number(number2);
    }
}
console.log("*************************************");
console.log(soma);
if (soma) {
    soma = addEventListener("click", () => {
        console.log(somar(number1.value, number2.value));
    });
}
console.log("******************** Retorno de function *****************");
function soma2(number1, number2) {
    return number1 + number2;
}
console.log(soma2(2, 4));
console.log("*************** Retorno de função do tipo void **************");
function print(number1, number2) {
    console.log(number1 + number2);
}
print(3, 6);
console.log("********************* Função callback ************************");
function calc(number1, number2, callback) {
    let soma = number1 + number2;
    return callback(soma);
}
function dobro(number1) {
    return number1 * number1;
}
console.log(calc(4, 5, dobro));
console.log("********************* Variável type unknown ************************");
let varAny = 'Christian';
varAny = 3;
varAny = true;
//A variavel string recebe a varável
let varNome = varAny;
let varNomeUnknown;
let varUnkown = 'Christian';
//Para atribuir o dado tem de passar por uma validação
//varUnkown = varNomeUnknown;
if (typeof varUnkown === 'string') {
    varNomeUnknown = varUnkown;
}
console.log("********************* Tipo never e comando throw ************************");
function error(erro, codigo) {
    throw { erro: String, codigo: codigo };
}
error('Tipo indefinido', 1220);
