//Desafio 02
// Como podemos melhorar o esse código usando TS?

class PessoaTeste {
    private name: string;
    private idade: number;
    private profissao: ProfissaoTeste;
  
    constructor(name: string, idade: number, profissao: ProfissaoTeste) {
      this.name = name;
      this.idade = idade;
      this.profissao = profissao;
    }
  
    printPessoa(): void {
      console.log(
        `O ${this.name} tem ${this.idade} de idade. Sua profissão é ${
          ProfissaoTeste[this.profissao]
        }`
      );
    }
  }
  
  enum ProfissaoTeste {
    Padeiro,
    Atriz,
  }
  
  const pessoa01 = new PessoaTeste("Christian", 33, ProfissaoTeste.Padeiro);
  const pessoa02 = new PessoaTeste("Raimunda", 43, ProfissaoTeste.Atriz);
  const pessoa03 = new PessoaTeste("Christian", 33, ProfissaoTeste.Padeiro);
  const pessoa04 = new PessoaTeste("Raimunda", 43, ProfissaoTeste.Atriz);
  
  console.log(pessoa01);
  console.log(pessoa02);
  console.log(pessoa03);
  console.log(pessoa04);
  
  pessoa01.printPessoa();