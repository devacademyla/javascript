function Dado() {
  this.resultado = 0;
  this.lanzar = function () {
    this.resultado = Math.floor(Math.random() * (6)) + 1;
  };
  this.getResultado = function () {
    return this.resultado;
  };
}

function Todito() {
  var castigo = "";
  var definirCastigo = function (n) {
    switch (n) {
      case 1:
      case 5:
        castigo = "Toman todos";
        break;
      case 2:
      case 6:
        castigo = "Toma otro";
        break;
      case 3:
        castigo = "Toma el de mi derecha";
        break;
      case 4:
        castigo = "Toma el de mi izquierda";
        break;
    }
  };
  this.jugar = function () {
    var dado = new Dado();
    dado.lanzar();
    definirCastigo(dado.resultado);
  };
  this.getCastigo = function () {
    return castigo;
  };
}

function Jugador() {
  var shots = 0;
  this.tomarShot = function () {
    shots++;
  };
  this.estaEbrio = function () {
    return shots === 10;
  };
  this.getShots = function () {
    return shots;
  };
}

function Juego(numJugadores) {
  this.jugadores = [];
  var i = 0;
  var j = 0;
  var todito = new Todito();
  for (i; i < numJugadores; i++) {
    this.jugadores[i] = new Jugador();
  }

  this.aplicarCastigo = function (castigo, index) {
    switch (castigo) {
      case "Toman todos":
        for (j; j < this.jugadores.length; j++) {
          this.jugadores[j].tomarShot();
        }
        break;
      case "Toma otro":
        break;
      case "Toma el de mi derecha":
        index === this.jugadores.length - 1 ? this.jugadores[0].tomarShot() : this.jugadores[index+1].tomarShot();
        break;
      case "Toma el de mi izquierda":
        index === 0 ? this.jugadores[this.jugadores.length - 1].tomarShot() : this.jugadores[index-1].tomarShot();
        break;
    }
  };
}