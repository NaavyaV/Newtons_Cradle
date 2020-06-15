var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	bob = new Bob(300, 500, 50);
	bob2 = new Bob(350, 500, 50, {isStatic: true});
	bob3 = new Bob(400, 500, 50, {isStatic: true});
	bob4 = new Bob(450, 500, 50, {isStatic: true});
	bob5 = new Bob(500, 500, 50);

	roof = new Roof(400, 300, 300, 30);

	rope = new Rope(bob.body, roof.body, -50*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -50, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 50, 0);
	rope5 = new Rope(bob5.body, roof.body, 50*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');
  
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob.body, bob.body.position, {x:-150, y:0});
  }
}



