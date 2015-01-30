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
      expect(definirCastigo(2)).toEqual("Toma otro");
      expect(definirCastigo(6)).toEqual("Toma otro");
    });
    it("3: Toma el de mi derecha", function () {
      expect(definirCastigo(3)).toEqual("Toma el de mi derecha");
    });
    it("4: Toma el de mi izquierda", function () {
      expect(definirCastigo(4)).toEqual("Toma el de mi izquierda");
    });
  });
});