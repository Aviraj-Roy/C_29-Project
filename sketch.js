const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var a;
var circles=[];

var b8,b9,b10,b11,b12;
var b13,b14,b15,b16;
var polygon;

function setup() {
  var canvas = createCanvas(800,800);
  stroke(255)

  engine = Engine.create();
    world = engine.world;
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)

  b8 = new Box(330,235,30,40);
  World.add(world, b8);
  b9 = new Box(360,235,30,40);
  World.add(world, b9);
  b10 = new Box(390,235,30,40);
  World.add(world, b10);
  b11 = new Box(420,235,30,40);
  World.add(world, b11);
  b12 = new Box(450,235,30,40);
  World.add(world, b12);

  b13 = new Box(360,235,30,40);
  World.add(world, b12);
  b14 = new Box(360,235,30,40);
  World.add(world, b14);
  b15 = new Box(360,235,30,40);
  World.add(world, b15);

  polygon = Matter.Bodies.circle(50,200,20);
  World.add(world, polygon);
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine);
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
  {
	  circle(circles[i], height/2,20)
  }
  if(camera.position.x%width===0)
  {
	  circles.push(camera.position.x+width/2)
  }
  // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
  
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  b13.display();
  b14.display();
  b15.display();

  drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 