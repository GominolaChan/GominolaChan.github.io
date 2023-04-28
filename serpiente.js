const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Añadimos el permiso "interest-cohort" a la cabecera
ctx.headers = {
  "Permissions-Policy": "interest-cohort=()"
};

let x = 50;
let y = 50;
let size = 20;

function drawJosueED() {
  ctx.fillStyle = "pink";
  ctx.fillRect(x, y, size, size);
}

drawJosueED();
