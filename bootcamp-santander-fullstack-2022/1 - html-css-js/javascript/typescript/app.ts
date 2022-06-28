const nameInput = document.getElementById("name") as HTMLInputElement;
const btnName = document.getElementById("btn-name");

function printName(name: string, frase: string, imprimir: boolean) {
  if (imprimir) {
    return console.log(frase + name);
  }
  return console.log("Não foi permitido!");
}

let frase: string = "Seu nome é: ";
let imprimir: boolean = true;

if (btnName) {
  btnName.addEventListener("click", () => {
    printName(nameInput.value, frase, imprimir);
  });
}

//Ojetos, variáveis e enum

const person: {
  name: string;
  age: number;
  profissao: string;
} = {
  name: "Christian",
  age: 33,
  profissao: "developer",
};

enum Profissao {
  teacher,
  developer,
  doctor,
  artist,
}

interface IPerson {
  name: string;
  age: number;
  profissao: Profissao;
}

const person1: IPerson = {
  name: "Christian",
  age: 33,
  profissao: Profissao.developer,
};

console.log(person1);

interface IAluno extends IPerson {
  materia: string[];
  nota: number[];
}

const aluno1: IAluno = {
  name: "Gabriel",
  age: 15,
  profissao: Profissao.teacher,
  materia: ["Protuguês", "Matemática", "Programação"],
  nota: [9, 7, 6],
};

function list(list: string[]) {
  for (const item of list) {
    console.log("-", item);
  }
}

console.log(aluno1);
list(aluno1.materia);

//Variável any

let valorAny: any;
valorAny = true;

//String
valorAny = "Christian";

let numero: number = 33;
console.log("Teste de varáveis: ", numero);
//Número definido como number
numero = valorAny;

console.log("Variável definido como number: ", numero);

//Definição de tipos de variáveis personalizadas

const number1 = document.getElementById("number1") as HTMLInputElement;
const number2 = document.getElementById("number2") as HTMLInputElement;
let soma: any = document.getElementById("soma");

function somar(number1: number | string, number2: number | string) {
  if (typeof number1 === "string" && typeof number2 === "string") {
    return `Palavras enviadas: ${number1} e ${number2}`;
  } else {
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

function soma2(number1: number, number2: number): number{
  return number1 + number2;
}

console.log(soma2(2, 4));
