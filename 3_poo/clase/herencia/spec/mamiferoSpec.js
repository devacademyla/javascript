describe("Mamífero", function () {
  it("respira", function () {
    var mamifero = new Mamifero();
    expect(mamifero.respirar()).toEqual("inhala, exhala");
  });
});