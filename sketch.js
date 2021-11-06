
var hoopImg,hoop;
var basketballImg,basketball;

function preload(){
hoopImg=loadImage("hoop.png")
basketballImg = loadImage("basketball.png");
}

function setup(){

  createCanvas(600,700);
  hoop=createSprite(300,10)
 hoop.addImage(hoopImg);
 hoop.scale=0.5

 basketball = createSprite(300,400);
 basketball.addImage(basketballImg);
 basketball.scale = 0.2;

}

function draw(){
  background("green");
  if(keyDown("UP_ARROW")){
    basketball.velocityY = -10;
  }
  if(keyDown("LEFT_ARROW")){
    basketball.x = basketball.x-3;
  }
  if(keyDown("RIGHT_ARROW")){
    basketball.x=basketball.x+3;
  }
  hoop.depth=basketball.depth+1

  drawSprites();
}