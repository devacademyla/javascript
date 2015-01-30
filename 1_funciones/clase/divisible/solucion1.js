var divisor = 20;
var numero = 0;
var i = 1;
var encontrado = false;

while (encontrado === false) {
  numero += divisor;
  while (numero%i === 0 && i <= divisor) {
    if (i === divisor) encontrado = true;
    i++;
  }
  i = 1;
}

console.log(numero);