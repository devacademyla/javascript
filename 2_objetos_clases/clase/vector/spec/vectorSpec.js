describe("Vector", function () {

  it("tiene constructor", function () {
    var vector = new Vector();
    expect(vector).toEqual(jasmine.any(Vector))
  });

  it("tiene propiedad x, y", function () {
    var vector = new Vector();
    vector.x = 10;
    vector.y = 20;
    expect(vector.x).toEqual(10);
    expect(vector.y).toEqual(20);
  });

  it("acepta x,y en el constructor", function () {
    var vector = new Vector(10, 20);
    expect(vector.x).toEqual(10);
    expect(vector.y).toEqual(20);
  });

  it("incrementar vector", function () {
    var vector = new Vector(10, 20);
    vector.incrementar(new Vector(1, 1));
    expect(vector.x).toEqual(11);
    expect(vector.y).toEqual(21);
  });

  it("disminuir vector", function () {
    var vector = new Vector(10, 20);
    vector.disminuir(new Vector(1, 1));
    expect(vector.x).toEqual(9);
    expect(vector.y).toEqual(19);
  });

  it("calcular longitud", function () {
    var vector = new Vector(3, 4);
    expect(vector.getLongitud()).toEqual(5);
  });

});
