var fibonacci = [1, 2];
var suma = 0;

function calcular(arr) {
  return arr[arr.length - 1] + arr[arr.length - 2];
}

while (fibonacci[fibonacci.length - 1] < 4e+6) {
  fibonacci.push(calcular(fibonacci));
}

fibonacci.forEach(function (n) {
  if (n % 2 === 0) {
    suma += n;
  }
});

console.log(suma);