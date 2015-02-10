var Caramelo = function () {
};

var Moneda = function () {
};

var Dispensador = function () {
  var monedas = [];
  var caramelos = [];
  var i = 0;

  this.cargarCaramelos = function (numeroCaramelos) {
    for (i = 0; i < numeroCaramelos; i++) {
      caramelos[i] = new Caramelo();
    }
  }

  this.ingresarMoneda = function (moneda) {
    if (this.totalCaramelos() === 0) {
      throw "Sin caramelos";
    }
    monedas.push(moneda);
  }

  this.entregarCaramelo = function () {
    return caramelos.pop();
  }

  this.totalCaramelos = function () {
    return caramelos.length;
  }

  this.totalMonedas = function () {
    return monedas.length;
  }
  
};