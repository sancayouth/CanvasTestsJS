var canvas = document.getElementById('a');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 8;
ctx.lineJoin = ctx.lineCap = 'round';

var points = []

canvas.onmousemove = function(e) {
  points.push({x:e.clientX, y:e.clientY});
  if (points.length == 10)
    draw();
};

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for(i=0;i<points.length; i++)
  {
    ctx.lineTo(points[i].x, points[i].y);
    if (i<3)
      points.pop();
  }
  ctx.stroke();
  points.length = 0;
};
