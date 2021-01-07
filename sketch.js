var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3
function setup() {
  createCanvas(1200,800);
  gameobject1=createSprite(100,100,50,50)
  gameobject1.shapeColor="blue"
  gameobject2=createSprite(200,100,50,50)
  gameobject2.shapecolour="red"
  gameobject3=createSprite(300,100,50,50)
  gameobject3.shapecolour="yellow"
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameobject3)){
    movingRect.shapeColor = "red";
    gameobject3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  gameobject3.shapeColor = "green";
  }
  
  drawSprites();
}

