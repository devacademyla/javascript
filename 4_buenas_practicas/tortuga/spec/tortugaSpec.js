describe("tortuga", function () {
  describe("Dado", function () {
    describe("lanzar", function () {
      it("resultado es un número aleatorio entre 1 y 6", function () {

      });
    });
  });
  describe("Cubilete", function () {
    var cubilete = new Cubilete();
    beforeEach(function () {
      cubilete.cargar(5);
    });
    it("cubilete tiene 5 dados", function () {

    });
    it("devuelve un arreglo de números aleatorios", function () {

    });
  });
  describe("Tortuga", function () {
    var tortuga = new Tortuga();
    it("tortuga no tiene caparazon ni patas al crearse", function () {
      resultado = "Obtuviste 0 caparazon y 0 patas";
      expect(tortuga.getResultado()).toEqual(resultado);
    });
    describe("evaluar", function () {
      it("obtienes un caparazon y 0 patas", function () {
        tortuga.evaluar([6, 4, 6, 6, 2]);
        var resultado = "Obtuviste 1 caparazon y 0 patas";
        expect(tortuga.getResultado()).toEqual(resultado);
      });
      it("obtienes un caparazon y 2 patas", function () {
        tortuga.evaluar([6, 4, 1, 1, 2]);
        var resultado = "Obtuviste 1 caparazon y 2 patas";
        expect(tortuga.getResultado()).toEqual(resultado);
      });
    });
  });
});