// recorre array 3x3 que e(pensando en un tablero de hundir la flota) pedimos un valor (1)(ponemos barco) (0)(no metemos nada, agua). Si no ponemos nada en la casilla, el bucle se para.

pepe: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    // console.log(`coordenada ${i}${j}`);
    coordenada = prompt(`Escoge 1 o 0 para la coordenada ${i},${j}`);
    if (coordenada == "1") {
    } else if (coordenada == "0") {
    } else if (coordenada == null) {
      break pepe;
    } else {
      alert("Has introducido un valor erroneo");
      break pepe;
    }
    console.log(`Has seleccionado ${coordenada} para la casilla ${i}${j}`);
  }
}
