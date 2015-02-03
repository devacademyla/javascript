describe("tortuga", function () {
  describe("dado", function () {
    it("valor del dado", function () {
      var nuevoDado = new Dado();
      expect(nuevoDado.lanzarDado()).toBeGreaterThan(0);
      expect(nuevoDado.lanzarDado()).toBeLessThan(7);
    });
  });
  describe("cubilete", function () {
    it("valor de los dados", function () {
      var nuevoCubilete = new Cubilete();
      var arrayValores = nuevoCubilete.lanzarDados(5);
      expect(arrayValores.length).toEqual(5);
    });
  });
  describe("jugada", function () {

  });
  describe("juego", function () {

  });
});