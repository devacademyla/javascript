var numero = 10;
var sumaCuadrados = 0;
var suma = 0;
var i = 1;

for (i; i <= numero; i++) {
  suma += i;
}
suma = Math.pow(suma, 2);

i = 1;
for (i; i <= numero; i++) {
  sumaCuadrados += Math.pow(i, 2);
}

console.log(suma - sumaCuadrados);