(function() {
  function minimoDivisible(n) {
    var numero = 0;
    var i = 1;
    var encontrado = false;
    while (encontrado === false) {
      numero += n;
      while (numero%i === 0 && i <= n) {
        if (i === n) encontrado = true;
        i++;
      }
      i = 1;
    }
    return numero;
  }

  console.log(minimoDivisible(20));
}())