var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
  path = loadImage("path.png");

  path_boy = loadAnimation("Runner-1.png", "Runner-2.png");
 
}

function setup(){
  
  createCanvas(400,400);
path = createSprite(0, 0, 200, 400);
path = addImage("path.png", pathImage);
path.scale=1.2;
path.velocityY = 10;

path_boy = createSprite(200, 350, 30, 30);
path_boy = addAnimation("path_boy", path_boy);

path_boy.scale=0.08;
  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  path_boy.x = MouseEvent.clientX; 
  
  edges= createEdgeSprites();
  path_boy.collide(edges[3]);
  path_boy.collide(rightBoundary);
  path_boy.collide(leftBoundary);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
