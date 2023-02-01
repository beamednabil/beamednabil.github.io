var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 25;
var isPainting = false;


function setWidth (value) {
    if (isNumeric(value)){
        paintcanvas.width = value;
    }
    else{
        alert ("Insert a valid number!");
    }
}

function setHeight(value) {
    if (isNumeric(value)){
        paintcanvas.height = value;
    }
    else{
        alert ("Insert a valid number!");
    }
}

function startPaint(){
    isPainting = true;
}    

function endPaint(){
    isPainting = false;
}

function resizeBrush(newSize){
    radius = newSize;
    document.getElementById("sizeOutput").value = newSize;
}

function changeColor (newColor){
    color = newColor;
}

function clearCanvas () {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

function doPaint(x,y){
    if(isPainting){
        paintCircle(x,y);
    }   
}

function isNumeric (value) {
return !isNaN(value);
}
