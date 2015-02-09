function Vector(x, y) {
  this.x = x;
  this.y = y;
  this.incrementar = function (otro) {
    this.x += otro.x;
    this.y += otro.y;
  };
  this.disminuir = function (otro) {
    this.x -= otro.x;
    this.y -= otro.y;
  };
  this.getLongitud = function () {
    var resultado = Math.sqrt(this.x * this.x + this.y * this.y);
    return "La longitud es " + resultado;
  }
}

vector = new Vector(2, 3);
console.log(vector.getLongitud());
vector.incrementar(new Vector(1, 1));
console.log(vector.getLongitud());