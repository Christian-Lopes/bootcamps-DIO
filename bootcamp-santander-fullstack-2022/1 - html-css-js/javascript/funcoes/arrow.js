//Arrow fuctions
const hello = () => {
    "Hello! "
}

console.log(hello);

//Arrow function não faz hoisting

//soma(2,4);
//const soma = (a , b) => a + b;

//Forma correta
const soma =(a, b) => a + b;
console.log(soma(2, 5));

