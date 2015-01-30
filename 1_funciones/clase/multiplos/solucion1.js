var suma = 0;
var contador = 0;

for (contador; contador < 1000; contador++) {
  if (contador%3 === 0 || contador%5 === 0) {
    suma += contador;
  }  
}

console.log(suma);