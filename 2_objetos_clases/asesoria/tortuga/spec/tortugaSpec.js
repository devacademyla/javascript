describe("tortuga", function () {
  describe("Dado", function () {
    it("lanzar el dado", function() {
      var dado = new Dado();
      dado.lanzar();
      expect(dado.getResultado() >= 1).toBeTruthy();
      expect(dado.getResultado() <= 6).toBeTruthy();
    });
  });
  describe("Cubilete", function () {
    it("lanzar los dados", function () {
      var cubilete = new Cubilete();
      cubilete.cargar(5);
      cubilete.lanzar();
      expect(cubilete.getResultados().length).toEqual(5);
    });
  });
  describe("Tortuga", function () {
    it("hacer una jugada", function () {

    });
  });
});