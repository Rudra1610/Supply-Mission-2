var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,receive;
var receiveRedge,receiveLedge;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	receiveSprite=createSprite(400,650,200,20);
	receiveSprite.shapeColor=color(255,0,0);

	receiveRSprite=createSprite(500,610,20,100);
	receiveRSprite.shapeColor=color(255,0,0);

	receiveLedge=createSprite(300,610,20,100);
	receiveLedge.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	receive = Bodies.rectangle(400,650,200,20, {isStatic:true} );
	World.add(world,receive);

	receiveRedge = Bodies.rectangle(500,610,20,100, {isStatic:true} );
	World.add(world,receiveRedge);

	receiveLedge = Bodies.rectangle(300,610,20,100, {isStatic:true} );
	World.add(world,receiveLedge);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false);

  }
}



