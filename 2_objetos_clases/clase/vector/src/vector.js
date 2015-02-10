var Vector = function (x, y) {
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
    return  Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
