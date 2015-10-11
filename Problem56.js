var c = document.getElementById("myCanvas");
var restart = document.getElementById("restart");
var ctx = c.getContext("2d");

var t = 0;
var xpos = 0;
var ypos = 0;
var delta = .01;
var vxi = 6.0;
var vyi = 0;
var ax = -4.9;
var ay = 3.2;

ctx.fillStyle = 'rgb(0,0,255)';

setInterval(moveWave, 100);

ctx.clearRect(0, 0, 600, 600);

restart.onclick = function() {
  t = 0;
  ctx.clearRect(0, 0, 600, 600);
}

function moveWave() {
  t += delta;
  
  xpos = vxi*t+ax*t*t;
  ypos = vyi*t+ay*t*t;  
  
	ctx.fillRect(300+50*xpos, 600-50*ypos, 2, 2);
	
	ctx.stroke();
}