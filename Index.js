var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color="purple";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(200,200,40,0,360);
ctx.stroke();
canvas.addEventListener("mousedown",mousedownfunction);
function mousedownfunction(e){
    var mousex=  e.clientX-canvas.offsetLeft;
    var mousey=  e.clientY-canvas.offsetTop;
    console.log(mousex,mousey);
    circle(mousex,mousey);
}
function circle(mousex,mousey){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(mousex,mousey,40,0,360);
ctx.stroke();
}
function restart(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}