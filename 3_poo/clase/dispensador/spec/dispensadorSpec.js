describe("Dispensador", function() {

  it("inicia sin caramelos", function() {
    var dispensador = new Dispensador();
    expect(dispensador.totalCaramelos()).toEqual(0);
  });

  it("inicia sin monedas", function() {
    var dispensador = new Dispensador();
    expect(dispensador.totalMonedas()).toEqual(0);
  });

  it("cargar caramelos", function() {
    var dispensador = new Dispensador();
    dispensador.cargarCaramelos(10);
    expect(dispensador.totalCaramelos()).toEqual(10);
  });


  it("ingresar 1 moneda y entregar 1 caramelo", function() {
    var dispensador = new Dispensador();
    var moneda = new Moneda();
    dispensador.cargarCaramelos(10);
    dispensador.ingresarMoneda(moneda);
    expect(dispensador.entregarCaramelo()).toEqual(jasmine.any(Caramelo))
    expect(dispensador.totalMonedas()).toEqual(1);
    expect(dispensador.totalCaramelos()).toEqual(9);
  });

  it("no acepta monedas si se queda sin caramelos", function() {
    var dispensador = new Dispensador();
    var moneda = new Moneda();
    expect(dispensador.totalMonedas()).toEqual(0);
    expect(function () { 
      dispensador.ingresarMoneda(moneda) 
    }).toThrow("Sin caramelos");
  });
  
});