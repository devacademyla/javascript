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
  describe("Jugador", function () {
    it("bebe una vez, no está ebrio", function () {
      var jugador = new Jugador();
      jugador.tomarShot();
      expect(jugador.estaEbrio()).toBeFalsy();
    });
    it("bebe 10 veces, está ebrio", function () {
      var jugador = new Jugador();
      jugador.tomarShot();
      jugador.tomarShot();
      jugador.tomarShot();
      jugador.tomarShot();
      jugador.tomarShot();
      jugador.tomarShot();
      jugador.tomarShot();
      jugador.tomarShot();
      jugador.tomarShot();
      jugador.tomarShot();
      expect(jugador.getShots()).toEqual(10);
      expect(jugador.estaEbrio()).toBeTruthy();
    });
  });
  describe("Juego", function () {
    describe("aplicar castigos", function () {
      it("toma el de mi izquierda", function () {
        var juego = new Juego(3);
        juego.aplicarCastigo("Toma el de mi izquierda", 1);
        expect(juego.jugadores[0].getShots()).toEqual(1);
      });
      it("toma el de mi derecha", function () {
        var juego = new Juego(3);
        juego.aplicarCastigo("Toma el de mi derecha", 1);
        expect(juego.jugadores[2].getShots()).toEqual(1);
      });
      it("toman todos", function () {
        var juego = new Juego(3);
        var i = 0;
        juego.aplicarCastigo("Toman todos", 1);
        for (i; i < 3; i++) {
          expect(juego.jugadores[i].getShots()).toEqual(1);
        }
      });
      it("soy el primero de la lista y toma el de mi izquierda", function () {
        var juego = new Juego(3);
        juego.aplicarCastigo("Toma el de mi izquierda", 0);
        expect(juego.jugadores[2].getShots()).toEqual(1);
      });
      it("soy el último de la lista y toma el de mi derecha", function () {
        var juego = new Juego(3);
        juego.aplicarCastigo("Toma el de mi derecha", 2);
        expect(juego.jugadores[0].getShots()).toEqual(1);
      });
    });
  });
});