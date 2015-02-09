var Persona = function (nombre) {
  this.nombre = nombre;

  this.saludar = function () {
    return "Hola, mi nombre es " + nombre;
  };
};
