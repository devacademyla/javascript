function multiploDeTres(n) {
  return n % 3 === 0;
}

function multiploDeCinco(n) {
  return n % 5 === 0;
}

function aceptable(n) {
  return multiploDeTres(n) || multiploDeCinco(n);
}

function suma(n) {
  var suma = 0;
  var contador = 0;

  for (contador; contador < n; contador++) {
    if (aceptable(contador)) suma += contador;
  }

  return suma;
}

console.log(suma(1000));