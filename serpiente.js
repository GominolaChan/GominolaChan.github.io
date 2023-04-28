var container = document.getElementById("container");

// Definimos la serpiente
var snake = [];
snake[0] = {x: 250, y: 250};
var snakeLength = 5;

// Movemos la serpiente aleatoriamente cada 100ms
setInterval(function() {
    // Mover la serpiente
    for (var i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i-1].x;
        snake[i].y = snake[i-1].y;
    }
    snake[0].x += Math.floor(Math.random() * 3) - 1;
    snake[0].y += Math.floor(Math.random() * 3) - 1;
    
    // Limpiar el contenedor
    container.innerHTML = "";
    
    // Dibujar la serpiente
    for (var i = 0; i < snake.length; i++) {
        var div = document.createElement("div");
        div.className = "snake";
        div.style.left = snake[i].x + "px";
        div.style.top = snake[i].y + "px";
        container.appendChild(div);
    }
}, 100);