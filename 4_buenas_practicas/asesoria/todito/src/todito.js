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
  this.jugar = function () {
    var dado = new Dado();

    dado.lanzar();
    definirCastigo(dado.resultado);
  };
  
  var definirCastigo = function (n) {
    switch (n) {
      case 1:
      case 5:
        console.log("Toman todos");
        break;
      case 2:
      case 6:
        console.log("Toma otro");
        break;
      case 3:
        console.log("Toma el de mi derecha");
        break;
      case 4:
        console.log("Toma el de mi izquierda");
        break;
    }
  };
}