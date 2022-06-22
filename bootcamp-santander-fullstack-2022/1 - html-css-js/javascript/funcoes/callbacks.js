//Funções callbacks
//Pode chamar uma função como argumento

const calc = function (operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultadoSoma = calc(soma, 3, 80);

console.log(resultadoSoma);
