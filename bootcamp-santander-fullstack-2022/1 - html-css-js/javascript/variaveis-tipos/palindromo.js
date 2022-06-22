function verificarPalindromo(string) {
  if (!string) return "String vazia! Digite uma palavra.";
  let validar = string.split("").reverse().join("") === string;

  return message(string, validar);
}

function message(string, validar) {
  if (validar === true) {
    return `A palavra ${string} é um palíndromo!`;
  } else {
    console.log(`A palavra ${string} não é um palíndromo!`);
  }
}

function verificarPalindromo2(string) {
  if (!string) return "String vazia! Digite uma palavra.";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(verificarPalindromo2("annnna"));
console.log(verificarPalindromo("***************************"));
console.log(verificarPalindromo(""));
console.log(verificarPalindromo("ama"));
console.log(verificarPalindromo("arroz"));
