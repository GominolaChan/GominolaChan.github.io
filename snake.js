// obtén el elemento canvas
var canvas = document.getElementById("miCanvas");

// crea el contexto 2D
var ctx = canvas.getContext("2d");

// establece la posición inicial
var x = canvas.width/2;
var y = canvas.height/2;

// establece la velocidad inicial
var dx = 2;
var dy = -2;

// establece el radio del círculo
var ballRadius = 10;

// función para dibujar el círculo
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// función para mover el círculo
function moveBall() {
  // borra el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // dibuja el círculo
  drawBall();
  
  // mueve el círculo
  x += dx;
  y += dy;
  
  // cambia la dirección si el círculo llega a los bordes del canvas
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
}

// llama a la función moveBall cada 10 milisegundos para crear la animación
setInterval(moveBall, 10);
Este código utiliza el elemento canvas de HTML5 y el contexto 2D para dibujar un círculo que se mueve aleatoriamente por la pantalla. La función drawBall() dibuja el círculo en la posición actual, mientras que la función moveBall() borra el canvas, dibuja el círculo en la nueva posición y cambia la dirección si llega a los bordes del canvas. Finalmente, la función setInterval() llama a moveBall() cada 10 milisegundos para crear la animación.






