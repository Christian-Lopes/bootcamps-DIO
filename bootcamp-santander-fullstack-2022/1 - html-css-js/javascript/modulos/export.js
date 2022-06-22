//Export
export function soma(a, b) {
  return a + b;
}

//Export um grupo de functions

function subt(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

export { subt, mult }

//Default export
//Só pode haver um por arquivo
//Será o retorno padrão do seu arquivo

function name(string){
    return string;
}

export default name;