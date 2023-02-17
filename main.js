
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
//new DnD(canvas);

// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 2;

// // Draw a rectangle with a fill and stroke
// ctx.fillRect(50, 50, 100, 50);
// ctx.strokeRect(50, 50, 100, 50);
// ctx.fillStyle = '#F0F0F0'; // set canvas' background color
// ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle({x:10, y:20}, 50, 100, 5, '#FF0000');
rec.paint(ctx);
//var ligne = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//ligne.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

