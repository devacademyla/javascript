function lanzarDado() {
  return Math.floor(Math.random() * (5)) + 1;
}

function definirCastigo(n) {
  switch (n) {
    case 1:
    case 5:
      return "Toman todos";
    case 2:
    case 6:
      return "Toma otro";
    case 3:
      return "Toma el de mi derecha";
    case 4:
      return "Toma el de mi izquierda";
  }
}