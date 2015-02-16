describe("Pato", function () {
  it("hace quack", function () {
    var pato = new Pato();
    expect(pato.quack()).toEqual("Quack!");
  });
  it("nada en el estanque", function () {
    var pato = new Pato();
    expect(pato.nadar()).toEqual("Nadando en el estanque");
  });
  it("puede volar", function () {
    var pato = new Pato();
    expect(pato.volar()).toEqual("Volando por los cielos");
  });
  describe("Mallard", function () {
    it("se muestra en pantalla", function () {
      var pato = new PatoMallard();
      expect(pato.mostrar()).toEqual("Soy un pato Mallard");
    });
  });
  describe("Blanco", function () {
    it("se muestra en pantalla", function () {
      var pato = new PatoBlanco();
      expect(pato.mostrar()).toEqual("Soy un pato Blanco");
    });
  });
});