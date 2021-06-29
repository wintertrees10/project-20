function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  var car, wall;
  var speed, weight;

}

function draw() {
  background(255,255,255);  
  speed= random(55,90);
  weight = random(400,1500);
  car= createSprite(500,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
car.velocityX=speed;
if (car.X- wall.X<(car.width+wall.width/2)){
  car.velocityX=0
  var deformation = 0.5* weight*speed*speed/22500
  if (deformation < 100) {
    car.shapeColor=color(0,255,0);
  }
  if (deformation > 100 && deformation <180) {
    car.shapeColor=color(230,230,0);

  }
  if (deformation >180) {
    car.shapeColor=color(255,0,0);

  } 
    )
}
  drawSprites();
}