"use strict";
console.log("******************** TYPESCRIPT ***************");
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function somaTS(numero1, numero2) {
    return numero1 + numero2 + numero1;
}
if (button) {
    button.addEventListener("click", () => {
        if (input1 && input2) {
            console.log(somaTS(Number(input1.value), Number(input2.value)));
        }
    });
}
console.log('Teste');
console.log('Teste');
console.log('Teste');
