describe("todito", function () {
  describe("Lanzar dado", function () {
    it("devuelve un número entre 1 y 6", function () {
      expect(lanzarDado()).toBeGreaterThan(0);
      expect(lanzarDado()).toBeLessThan(7);
    });
  });
  describe("Definir castigo", function () {
    it("1 o 5: Toman todos", function () {
      expect(definirCastigo(1)).toEqual("Toman todos");
      expect(definirCastigo(5)).toEqual("Toman todos");
    });
    it("2 o 6: Toma otro", function () {

    });
    it("3: Toma el de mi derecha", function () {

    });
    it("4: Toma el de mi izquierda", function () {

    });
  });
});