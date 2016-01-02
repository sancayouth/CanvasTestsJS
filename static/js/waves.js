var canvas = document.getElementById('a');
var ctx = canvas.getContext('2d');

onload = function update (){
  requestAnimationFrame(update);
  //init
  unit = 40;
  h = canvas.height;
  w = canvas.width;
  if(!window.time){
    time = 0;
    frame = 0;
    timeNextFrame = 0;
    t = 0;
    vals = []
  }
  currentTime = performance.now() / 1000;
  while (time < currentTime){
    while(time < timeNextFrame){
      time += 1/16384;
    }
    frame++;
    timeNextFrame += 1/60;
    //update visuals
    t = time*Math.PI;
    vals.push(Math.sin(-t));

  }
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.translate(0, h/2);
  ctx.beginPath();
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#000';
  l = vals.length;

  for(i=l; i>0; i--){
    p = vals[i];
    ctx.lineTo(i, unit*p);
  }
  ctx.restore();
  ctx.stroke();

};
