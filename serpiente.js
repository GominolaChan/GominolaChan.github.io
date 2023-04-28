const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// set up snake initial position and size
let snake = [{ x: 0, y: 0 }, { x: 5, y: 0 }, { x: 10, y: 0 }];
let snakeSize = 5;

// set up initial velocity
let velocity = { x: 1, y: 0 };

// set up game loop
setInterval(() => {
  // update snake position
  for (let i = snake.length - 1; i > 0; i--) {
    snake[i].x = snake[i - 1].x;
    snake[i].y = snake[i - 1].y;
  }

  snake[0].x += velocity.x * snakeSize;
  snake[0].y += velocity.y * snakeSize;

  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw snake
  ctx.fillStyle = "green";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x, snake[i].y, snakeSize, snakeSize);
  }
}, 1000 / 30); // update at 30 fps
