
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var plane, stone, rubber, hammer, iron;
var hammer;

function setup() {
	var canvas=createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;	

	hammer=new Hammer(10,100);
	plane=new Plane(600,height,1200,20);
	rubber=new Rubber(900,450,70);
	stone=new Stone(700,320,100,100);
	iron = new Iron(750,340,35,35);

	Engine.run(engine);
  
}


function draw() {
	background("lightBlue");
	rectMode(CENTER);
  	Engine.update(engine)
  
	rubber.display();
  	stone.display();
	hammer.display();
	plane.display();
	iron.display();

}