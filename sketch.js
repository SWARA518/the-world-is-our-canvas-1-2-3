
var database;
var myPaint = [];
var currentPath = [];
var isDrawing = false


function setup(){
canvas = createCanvas(500,500)

canvas.mousePressed(startPoint)
canvas.mouseReleased(endPoint)

var saveButton = createButton('save');
saveButton.mousePressed(saveDrawing);

var clearButton = careteButton('clear');
clearButton.mousePressed(clearDrawing);
database = firebase.database();

}

function startPoint(){
  isDrawing = true;
  currentPath = [];
  myPaint.push(currentPath)
}

function endPoint(){
isDrawing = false;
}

function draw(){
background(0)

if(isDrawing){
  var point = {
    x:mouseX,
    y:mouseY
  };
currentPath.push(point)
}

stoke(255);
strokeWeight(4);
noFill(0);

for(var i = 0;i < myPaint.length;i++){
    var path = myPaint[i];
    beginShape();
for(var j = 0;j < path.length;j++){
 vertex(path[j].x,path[j].y)
}
   endShape();
}
}

function saveDrawing(){
  var ref = database('drawings');
  var data = {
    drawing : myPaint
  };
  ref.push(data)
}

function clearDrawing(){
  myPaint = []
}