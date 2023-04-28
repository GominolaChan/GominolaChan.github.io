const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const x = 100; // posición inicial del texto en el eje x
let y = 100; // posición inicial del texto en el eje y
let dy = 2; // velocidad del movimiento en el eje y

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // limpiamos el canvas
  ctx.font = "40px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText("JosueED", x, y); // dibujamos el texto en la posición actual
  y += dy; // actualizamos la posición del texto en el eje y
}

setInterval(draw, 10); // llamamos a la función draw cada 10 milisegundos
