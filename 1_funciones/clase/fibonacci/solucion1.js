var fibonacci = [1, 2];
var suma = 0;
var temporal;

while (fibonacci[fibonacci.length - 1] < 4e+6) {
  temporal = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(temporal);
}

fibonacci.forEach(function (n) {
  if (n % 2 === 0) {
    suma += n;
  }
});

console.log(suma);