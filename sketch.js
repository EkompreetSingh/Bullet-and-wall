var bullet,wall,speed,weight,thichness;
function setup() {
 
  createCanvas(1600,400);
  bullet=createSprite(100, 200, 20, 10);
  bullet.shapeColor="white";

 

  speed=random (223,321);
  weight=random (30,52);
  thickness=random (22,83);

  bullet.velocityX=speed;
  wall=createSprite(1200, 200,thickness, height/2);
  wall.shapeColor="grey";


 
}

function draw() {
  background(0);  
  var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if (bullet.collide(wall)) {
    
    bullet.velocityX=0;
    if (damage >10) {
      wall.shapeColor= "red";
    }
    else{
      wall.shapeColor="green";
    }
   

  }
  fill("white");
  text("damage: "+damage,200,200)
  drawSprites();
}