var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth=10;
ctx.arc(0,0,250,0,2*Math.PI);
ctx.strokeStyle="aqua";
ctx.stroke();
ctx.closePath();