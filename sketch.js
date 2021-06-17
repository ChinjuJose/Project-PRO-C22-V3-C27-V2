const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roofOptions={
		isStatic:true			
	}

	var bobOptions={
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8	
	}

	roof = Bodies.rectangle(400,100,250,20,roofOptions);
    World.add(world,roof);

	/*bob1 =Bodies.circle(320,380,20,bobOptions);
    World.add(world,bob1);

	bob2 = Bodies.circle(360,380,20,bobOptions);
    World.add(world,bob2);

	bob3 = Bodies.circle(400,380,20,bobOptions);
    World.add(world,bob3);

	bob4 = Bodies.circle(440,380,20,bobOptions);
    World.add(world,bob4);

	bob5 = Bodies.circle(480,380,20,bobOptions);
    World.add(world,bob5);*/

	bob1 = new Bob(320,380,20);
	bob2 = new Bob(360,380,20);
	bob3 = new Bob(400,380,20);
	bob4 = new Bob(440,380,20);
	bob5 = new Bob(480,380,20);


	rope1 = new Rope(roof,bob1, -80,0)
	rope2 = new Rope(roof,bob2, -40,0)
	rope3 = new Rope(roof,bob3, 0,0)
	rope4 = new Rope(roof,bob4, 40,0)
	rope5 = new Rope(roof,bob5, 80,0)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,250,20);
  
  /*ellipse(bob1.position.x,bob1.position.y,40);
  ellipse(bob2.position.x,bob2.position.y,40);
  ellipse(bob3.position.x,bob3.position.y,40);
  ellipse(bob4.position.x,bob4.position.y,40);
  ellipse(bob5.position.x,bob5.position.y,40); */

  bob1.show();
  bob2.show();
  bob3.show();
  bob4.show();
  bob5.show();
 
  rope1.show();
  rope2.show();
  rope3.show();
  rope4.show();
  rope5.show();
}

function keyPressed(){
	if(keyCode == RIGHT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.05,y:-0.05});
	}
}