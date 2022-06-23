function soma(a: number, b: number) {
  return a + b;
}

console.log(soma(3, 7));

//Types
//Interfaces
interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  executarSom(som: number): void;
}

const animal: IAnimal = {
  nome: "Elefante",
  tipo: "terrestre",
  executarSom: (som)=>(`${som}`)
};

animal.executarSom(5);

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarSom: (som)=>(`${som}`)
}
