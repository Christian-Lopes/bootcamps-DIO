var a = 1; //Escopo global
var b = 2; //Escopo global

if (a === 1) {
  var a = 11; //Escopo global
  let b = 22; //Escopo local

  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);

//Exemplo dois

var firstName = "João"; //global
var lastName = "Souza"; //global

if (firstName === "João") {
  var firstName = "Pedro";  //global
  let lastName = "Silva";   //local
}

console.log(firstName, lastName);
