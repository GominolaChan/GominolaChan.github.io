const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const snakeSize = 5;
let snake = [{ x: 10, y: 10 }];

function drawSnake() {
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x, snake[i].y, snakeSize, snakeSize);
  }
}

function moveSnake() {
  let dx = snakeSize;
  let dy = 0;
  snake.unshift({ x: snake[0].x + dx, y: snake[0].y + dy });
  snake.pop();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
  clearCanvas();
  moveSnake();
  drawSnake();
}

setInterval(gameLoop, 100);
