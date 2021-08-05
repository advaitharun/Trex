var Trex, Trex_running;
var Ground
function preload()
{
  Trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  GroundImage=loadImage("ground2.png")
  
}
function setup() 
{
  createCanvas(600,200);
  Trex= createSprite(50,160,20,50)
  Trex.addAnimation("running",Trex_running)
  Trex.scale=0.5;
  Trex.x=50;
  edges=createEdgeSprites()

  Ground=createSprite(200,180,400,20)
  Ground.addImage("Ground",GroundImage)
  Ground.velocityX=-2
}

function draw() 
{
background(255);
console.log("Trex Runner")
console.log(Trex.y)
if(keyDown("space"))
{
  Trex.velocityY=-10;
}
Trex.velocityY=Trex.velocityY+0.5;

Trex.collide(Ground)
Ground.x=Ground.width/2
drawSprites()
}

