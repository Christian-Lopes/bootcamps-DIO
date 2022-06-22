//Função autoinvocável
(function (a, b) {
  return console.log(a + b);
})(1, 2);

(function (a, b) {
  return console.log(a - b);
})(5, 7);

const soma3 = (function (a, b) {
  return a + b;
})(5, 6);

console.log(soma3);


