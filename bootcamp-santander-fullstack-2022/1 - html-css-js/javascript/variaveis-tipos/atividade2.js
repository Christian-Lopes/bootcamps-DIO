function trocar(numeros) {
  if (!numeros) {
    numeros = -1;
    return `${numeros}`;
  }

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numeros[i] = 0;
    }
  }
  return numeros;
}

let numeros = [1, 2, 3, 4, 5, 0, 7, 8, 10];
let teste = '';

console.log(trocar(numeros));
console.log(trocar(teste));
