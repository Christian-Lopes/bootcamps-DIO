//Tomadas
let tomadas = ["2 4 3 2"];
let lines = tomadas;

let line = lines.shift().split(" ");
let soma = 0;

for (i = 0; i < line.length; i++) {
  let transfor = parseInt(line[i]);
  soma = soma + transfor;
}
console.log(soma - 3);
