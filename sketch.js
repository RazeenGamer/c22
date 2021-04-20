const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;
var myEngine,myWorld
var ground;
var ball
function setup() {

  createCanvas(800,400);
  myEngine=engine.create();
  myWorld=myEngine.world;
  var option= {
    isStatic:true
  }
 ground = bodies.rectangle(200,280,800,10,option)
 world.add(myWorld,ground);
 var balloptions= {
   restitution:1.0
 }
 ball= bodies.circle(200,200,25,balloptions) 
 world.add(myWorld,ball)
}

function draw() {
  background(255,255,255);  
  engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25)
}