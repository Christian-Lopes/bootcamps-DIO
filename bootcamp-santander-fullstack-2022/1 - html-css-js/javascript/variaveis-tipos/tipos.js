// JS é uma linguagem de tipagem dinâmica(tipagem fraca)
let um = "um"; //tipo string
console.log(typeof um);

//mudando o tipo de dado
um = 20; //tipo number
console.log(typeof um);

//Data Types in JS

//Primitive types: number, strings, boolean, null, undefined

//01 - STRINGS
let nome = "Chrsitian";
let sobrenome = "Lopes";

let fullName = `${nome} ${sobrenome}`;
console.log(typeof fullName, fullName);

//02 - NUMBERS

let num = 100;

console.log(typeof num, num + 4);

//03 - BOOLEANS

let validar = true;
console.log(typeof validar, validar);

if (validar == true) {
  validar = false;
  console.log(typeof validar, validar);
}

//04 - EMPTY, NULL AND UNDEFINED

//EMPTY : quando vc inicializa uma variável
let name = "";
console.log("Tipo: ", typeof(name));

//NULL: quando o desenvolvedor coloca propositalmente valor nulo 
let idade = null;

//UNDEFINED: não foi definido ainda
let fruta;
console.log("Tipo: ", `${fruta}`);

//Composite/Non-Primitive types: object, array

//01 - ARRAYS: Lista iterável de elementos

let array = [];

let array2 = ["Christian", "Railana"];

array2.push("Fernanda"); //add elemento no final da lista
array2.unshift("Valdomiro"); //add elemento no início da lista
console.log("Quantos elementos: ", array2.length);

console.log(array2.pop()); //remove o ultimo elemento
console.log(array2.shift()); //retira o primeiro elemento
console.log(array2);

//02 - OBJECTS

let person = {
  name: "Christian",
  idade: 30,
};

person.peso = 75.3;
console.log(person);
console.log("Valores: ", Object.values(person));
console.log("Chaves: ", Object.keys(person));
