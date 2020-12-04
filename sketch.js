var gun,gunImage;
var wall,bullet,bulletImage;
var speed,weight,thickness;
var start,startImage;
var reset,resetImage;

function preload(){
startImage=loadImage("start.png")
resetImage=loadImage("reset.png")
gunImage=loadImage("gun.png")
bulletImage=loadImage("bullet.png")


}
function setup() {
  createCanvas(1500,400);

  speed=random(225,320)
  weight=random(50,55)
  thickness=random(22,83)

  gun =createSprite(100,200)
  gun.scale=0.5
  gun.addImage(gunImage)

  bullet=createSprite(120,200)
  bullet.addImage(bulletImage)
  bullet.rotation=90
  bullet.scale=0.2

  wall=createSprite(1300,200,20,height/2)
  wall.shapeColor="white"

  start=createSprite(250,350)
  start.addImage(startImage)
  start.scale=0.1

  reset=createSprite(450,350)
  reset.addImage(resetImage)
  reset.scale=0.3
  }

function draw() {
    background("grey");
    
  for(var i=0;i<=1600;i=i+20){
    stroke("white")
    line(i,200,i+10,200);
  }
  
    isTouching(bullet,wall)
   
  if(mousePressedOver(start)){
    bullet.velocityX=speed;
  }
  if(mousePressedOver(reset)){
    wall.visible=true
    bullet.x=120;
    bullet.y=200;
    speed=random(225,320)
    weight=random(50,55)
    thickness=random(22,83)
    bullet.velocityX=0
    wall.shapeColor="white"
    wall.width=thickness

  }
  gun.depth=bullet.depth
  gun.depth+=1
 
  drawSprites();
  textSize(30)
  stroke("black")
  fill("black")
  textFont("elephant")
  
  text("if wall, turns 🟥 its rejecter, if it turns 🟩 it is approved",20,30)
  }

function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2)
       {
      object1.velocityX=0
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
      if(damage>10){
        wall.shapeColor="red"
      }
      if(damage<10){
        wall.shapeColor="green"
      }
      }
      }
      