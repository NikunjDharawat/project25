
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const render = Matter.render;
const DustbinObj,paperObj,GroundObj
var world;

function setup() {
	createCanvas(1600, 700);
	 rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		option:{
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	//Create the Bodies Here.


	Engine.run(engine);
  //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  paperObject.display();
  groundObject.display();
  dustbinObjdisplay();

  drawSprites();
 
}



