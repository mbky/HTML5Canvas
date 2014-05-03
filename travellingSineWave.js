var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var amp = document.getElementById("params").amp;
var freq = document.getElementById("params").freq;
var animate = document.getElementById("animate").animate;
var beta = 0;
const twopi = 2*Math.PI;

amp.value = 100;
freq.value = 5;
animate.checked = true;
setInterval(function(){moveWave()},100);

ctx.fillStyle='rgb(00,00,128)';

function moveWave()
{
	var A, w;
	
	A = parseInt(amp.value, 10);
	w = twopi*parseInt(freq.value, 10);
	beta = ((beta+12)%800);
	
	if (animate.checked)
	{
		ctx.clearRect(0,0,800,300);
		for (var t = -beta, pos = 0; t < 800-beta; t++, pos++)
		{
			ctx.fillRect(pos, A*Math.sin(w*t/800) + 150, 2, 2);
		}
		ctx.stroke();
	}
}
