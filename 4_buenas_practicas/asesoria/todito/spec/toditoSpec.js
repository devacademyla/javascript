describe("Todito", function () {
  describe("Dado", function () {
    var dado = new Dado();
    describe("lanzar", function () {
      it("resultado es un número aleatorio entre 1 y 6", function () {
        dado.lanzar();
        expect(dado.getResultado() >= 1 && dado.getResultado() <= 6).toBeTruthy();
      });
    });
  });
});