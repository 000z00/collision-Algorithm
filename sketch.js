
var fixedRect, movingRect,rectangle;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  rectangle = createSprite(500,500,70,50);
  rectangle.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,rectangle)){
    movingRect.shapeColor = "violet";
    rectangle.shapeColor = "violet";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"
    rectangle.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}