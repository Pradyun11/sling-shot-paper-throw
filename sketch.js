var  ball, dustbin;
var ground,wall11,wall21,wall31,wall1,wall2,wall3;
var dustbin,dustbinImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload(){
dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 380, width, 20 , {isStatic:true} );
    World.add(world, ground);

	ball = new Ball(200,150);
	
	

    wall1 = new Wall(820,360,190,20);
    wall2 = new Wall(755,295,20,150);
	wall3 = new Wall(920,295,20,150);

	slingshot = new Slingshot(ball.body,{x:200,y:100});
	
   
    Engine.run(engine);
  
}
function draw() {
	background(180);

	rectMode(CENTER);
	rect(width/2,380,width,20);

	ball.display();
	wall1.display();
	wall2.display();
	wall3.display();
	slingshot.display();
	image(dustbinImage,750,205,170,165);

	drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
	 slingshot.fly();
 }



