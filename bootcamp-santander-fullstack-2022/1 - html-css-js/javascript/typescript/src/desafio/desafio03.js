"use strict";
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let somaNumero = document.getElementById("somar");
let campoSaldo = document.getElementById("campo-saldo");
let total = 0;
function somarSaldo(numero) {
    if (campoSaldo) {
        total += numero;
        campoSaldo.innerHTML = total.toString();
        clearCampo;
    }
}
function clearCampo() {
    somaNumero.value = '';
}
function clearSaldo() {
    if (campoSaldo) {
        total = 0;
        campoSaldo.innerHTML = total.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener("click", () => {
        somarSaldo(Number(somaNumero.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener("click", () => {
        clearSaldo();
    });
}
