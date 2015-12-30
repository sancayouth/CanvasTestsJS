var canvas = document.getElementById('a');
var ctx = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function() {
    var sourceX = 0;
    var sourceWidth = 5;
    var destX = sourceX;
    var destWidth = sourceWidth;
        while (sourceWidth<this.naturalWidth){
        ctx.drawImage(imageObj, sourceX, 0, sourceWidth, this.naturalHeight,  destX, 0, destWidth, this.naturalHeight);
        sourceX += 6;
        destX += 7 ;
        sourceWidth++;
    }

};
imageObj.src = 'static/images/conos.jpg';
