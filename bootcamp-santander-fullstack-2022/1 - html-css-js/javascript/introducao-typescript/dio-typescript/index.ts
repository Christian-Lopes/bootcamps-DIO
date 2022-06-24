function soma(a: number, b: number) {
  return a + b;
}

console.log(soma(3, 7));

//Interfaces
//Usado para definir contratos
interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  executarSom(som: number): void;
  domestico: boolean;
}

interface ICanino extends IAnimal {
  porte: "pequeno" | "médio" | "grande";
}

const animal: IAnimal = {
  nome: "Elefante",
  tipo: "terrestre",
  executarSom: (som) => `${som}`,
  domestico: false,
};

animal.executarSom(5);

const felino: IFelino = {
  nome: "Leão",
  tipo: "terrestre",
  visaoNoturna: true,
  executarSom: (som) => `${som}`,
  domestico: false,
};

//Types

type IDomestico = IFelino | ICanino;

const animal2: IDomestico = {
  domestico: true,
  nome: "cachorro",
  porte: "médio",
  tipo: "terrestre",
  executarSom: (som) => `${som}`,
  visaoNoturna: true,
};

//Input

const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});

//Generic types

function adicionarLista<T>(array: any[], valor: T) {
  return array.map((item) => item + valor);
}

adicionarLista([1, 2, 4], 9);
adicionarLista(["a", "bc"], "a");

//Desenvolvendo condicionais a partir de parâmetros

interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  cargo: "gerente" | "coordenador" | "supervisor";
}

function redirecione(usuario: IUsuario | IAdmin) {
  if ("cargo" in usuario) {
    //redirecionar para área de admin
  }

  //redirecionar para área do user
}

//Utilizando o caracter "?" para variáveis opcionais

interface IPerson {
  id: number;
  name: string;
  cargo?: "mecânico" | "vendedor" | "gerente";
}

function user(person: IPerson) {
  if (person.cargo) {
    //executar código
  }
}

//Criando variáveis com propriedade readonly e private

interface ICachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string;
}

type DogSomenteLeitura = {
  +readonly [K in keyof ICachorro]-?: ICachorro[K];
};

class MyDog implements DogSomenteLeitura {
  nome: string;
  idade: number;
  parqueFavorito: string;

  constructor(nome: string, idade: number, parqueFavorito: string) {
    this.nome = nome;
    this.idade = idade;
    this.parqueFavorito = parqueFavorito;
  }
}

const cao = new MyDog("Amorinha", 4, "city park");
console.log(cao);

//Como importar bibliotecas com typescript

import $ from "jquery";

$.fn.extend({
  novaFuncao() {
    console.log("Chamou nova função");
  },
});

$("body").novaFuncao();

//importando uma função

import { soma as soma1 } from "./functions";

console.log(soma1(2, 7));

//Exemplo de como usar Omit e conclusão do curso

interface IPessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'>{

}

const brasileiro: IBrasileiro = {
    nome: 'Christian',
    idade: 20
}
console.log(brasileiro);
