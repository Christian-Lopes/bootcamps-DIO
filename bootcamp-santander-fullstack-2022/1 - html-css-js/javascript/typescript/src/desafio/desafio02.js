"use strict";
//Desafio 02
// Como podemos melhorar o esse código usando TS?
class PessoaTeste {
    constructor(name, idade, profissao) {
        this.name = name;
        this.idade = idade;
        this.profissao = profissao;
    }
    printPessoa() {
        console.log(`O ${this.name} tem ${this.idade} de idade. Sua profissão é ${ProfissaoTeste[this.profissao]}`);
    }
}
var ProfissaoTeste;
(function (ProfissaoTeste) {
    ProfissaoTeste[ProfissaoTeste["Padeiro"] = 0] = "Padeiro";
    ProfissaoTeste[ProfissaoTeste["Atriz"] = 1] = "Atriz";
})(ProfissaoTeste || (ProfissaoTeste = {}));
const pessoa01 = new PessoaTeste("Christian", 33, ProfissaoTeste.Padeiro);
const pessoa02 = new PessoaTeste("Raimunda", 43, ProfissaoTeste.Atriz);
const pessoa03 = new PessoaTeste("Christian", 33, ProfissaoTeste.Padeiro);
const pessoa04 = new PessoaTeste("Raimunda", 43, ProfissaoTeste.Atriz);
console.log(pessoa01);
console.log(pessoa02);
console.log(pessoa03);
console.log(pessoa04);
pessoa01.printPessoa();
