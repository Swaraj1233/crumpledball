
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground1 = new ground(400,630,800,5);
ball1 = new ball(100,610,50,50);
box1 = new dustbin(600,620,100,10);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  box1.display();
  ball1.display();
 
}

function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:130,y:-145})
	}
}

