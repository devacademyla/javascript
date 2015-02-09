describe("Persona", function () {

  it("tiene constructor", function () {
    var persona = new Persona();
    expect(persona).toEqual(jasmine.any(Persona))
  });

  it("tiene propiedad nombre", function () {
    var persona = new Persona("Lennon");
    expect(persona.nombre).toEqual("Lennon");
  });

  it("saluda a sus amigos", function () {
    var persona = new Persona("Lennon");
    expect(persona.saludar()).toEqual("Hola, mi nombre es Lennon");
  });

});
