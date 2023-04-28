var juego = document.getElementById("juego");
var segmentos = [{x: 10, y: 10}, {x: 10, y: 15}, {x: 10, y: 20}]; // Posiciones iniciales de la serpiente
var direccion = "abajo";
var movimiento;

function actualizarJuego() {
  // Mover la serpiente
  var cabeza = segmentos[0];
  switch (direccion) {
    case "arriba":
      cabeza = {x: cabeza.x, y: cabeza.y - 5};
      break;
    case "abajo":
      cabeza = {x: cabeza.x, y: cabeza.y + 5};
      break;
    case "izquierda":
      cabeza = {x: cabeza.x - 5, y: cabeza.y};
      break;
    case "derecha":
      cabeza = {x: cabeza.x + 5, y: cabeza.y};
      break;
  }
  segmentos.unshift(cabeza);
  segmentos.pop();

  // Actualizar la posición de los segmentos en la pantalla
  for (var i = 0; i < segmentos.length; i++) {
    var segmento = document.getElementById("segmento" + i);
    segmento.style.left = segmentos[i].x + "px";
    segmento.style.top = segmentos[i].y + "px";
  }

  // Comprobar si la serpiente ha chocado con las paredes
  var cabezaX = segmentos[0].x;
  var cabezaY = segmentos[0].y;
  if (cabezaX < 0 || cabezaX >= 400 || cabezaY < 0 || cabezaY >= 400) {
    clearInterval(movimiento);
    alert("Game over!");
  }
}

// Iniciar el movimiento de la serpiente
movimiento = setInterval(actualizarJuego, 25);

// Cambiar la dirección de la serpiente cuando se pulsan las teclas de dirección
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 38: // Tecla de flecha hacia arriba
      direccion = "arriba";
      break;
    case 40: // Tecla de flecha hacia abajo
