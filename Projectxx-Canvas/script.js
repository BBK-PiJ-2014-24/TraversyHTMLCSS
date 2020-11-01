const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Rectangles
// ==========
// fillRect(x, y, width, height) - Draws a filled rectangle.
ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 150, 100);

ctx.fillStyle = 'blue';
ctx.fillRect(200, 20, 150, 100);


// strokeRect(x, y, width, height)- Draws a rectangular outline.
ctx.strokeStyle = 'green';
ctx.lineWidth = 5;
ctx.strokeRect(100, 200, 150, 100);

// clearRect(x, y, width, height) - Clears the specified rectangular area, making it fully transparent.
ctx.fillStyle = 'black';
ctx.fillRect(300, 300, 150, 100);
ctx.clearRect(310, 310,50, 50);

// TEXT INPUT
// ==========
// fillText(text, x, y [, maxWidth]);
ctx.fillStyle = 'purple';
ctx.font='30px Arial';
ctx.fillText("Hello World", 400, 50)

// LINES
// =====
ctx.moveTo(100, 550); // start line(x,y)
ctx.lineTo(200,550); // end line(x,y)
ctx.stroke(); // renders line


// PATHS for FILL SHAPES - e.g. Triangles
// =====================
ctx.beginPath(); // Set of line paths
    ctx.moveTo(400, 550); // start line(x,y)....Pen on canvas
    ctx.lineTo(500,550); // end line(x,y)
    ctx.lineTo(450,650); // end line(x,y)
    ctx.lineTo(400,550);
ctx.closePath(); // renders line ..lift pen off canvas
ctx.fillStyle='brown';
ctx.fill(); // fill shape

// Circles & Arcs
// ==============
// arc(x, y, radius, startAngle, endAngle, anticlockwise)
ctx.beginPath();
    ctx.arc(350, 650,30,0,2*Math.PI);
ctx.closePath();
ctx.fillStyle = 'grey';
ctx.fill();

// ANIMATION
// =========
const circle = {
    x: 100,
    y: 600,
    size: 30,
    dx: 10,
    dy: 0    
};

function drawCircle(){
    ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.size, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = 'purple';
    ctx.fill();
}

function renderAnimation(){
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    drawCircle();
    circle.x += circle.dx;
    requestAnimationFrame(renderAnimation);
}
renderAnimation();