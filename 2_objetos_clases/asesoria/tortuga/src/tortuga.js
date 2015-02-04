function Dado() {
  var resultado = 0;
  this.lanzar = function () {
    resultado = Math.floor(Math.random() * (6)) + 1;
  };
  this.getResultado = function () {
    return resultado;
  };
}

function Cubilete() {
  var dados = [];
  var resultados = [];
  this.cargar = function (numDados) {
    var i = 0;
    dados = [];
    resultados = [];
    for (i; i < numDados; i++) {
      dados[i] = new Dado();
    }
  };
  this.lanzar = function () {
    var i = 0;
    for (i; i < dados.length; i++) {
      dados[i].lanzar();
      resultados[i] = dados[i].getResultado();
    }
  };
  this.getResultados = function () {
    return resultados;
  };
}

function Tortuga() {
  var cubilete = new Cubilete();
  var numJugadas = 3;
  var numDados = 5;
  var jugadaFinal = {
    caparazon: 0,
    patas: 0
  };

  function evaluar(arrResultados) {
    var i = 0;
    console.log(arrResultados);
    for (i; i < arrResultados.length; i++) {
      if (jugadaFinal.caparazon === 1) {
        if (arrResultados[i] === 1) {
          jugadaFinal.patas++;
          numDados--;
        }
      } else {
        if (arrResultados[i] === 6) {
          jugadaFinal.caparazon++;
          numDados--;
        }
      }
    }
    console.log(jugadaFinal);
  }

  this.jugar = function () {
    while (numJugadas > 0 || (jugadaFinal.caparazon !== 1 && jugadaFinal.patas !== 4)) {
      if (numDados !== 0) {
        cubilete.cargar(numDados);
        cubilete.lanzar();
        evaluar(cubilete.getResultados());
      }
      numJugadas--;
    }
  };

  this.obtenerResultado = function () {
    return "Obtuviste " + jugadaFinal.caparazon + " caparazon y " + jugadaFinal.patas + " patas en " + (3 - numJugadas) + "/3 jugadas";
  };
}