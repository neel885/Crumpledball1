
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  	
}

function setup() {
	createCanvas(1000, 700);

	ground = createSprite(width/2, height-35, width,10)
	ground.shapeColor = "white"


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
     
	Engine.run(engine);

	paperObject = new Paper(100,height-55,30 );


	boxPosition=width-250
	  boxY=610;
	  boxleftSprite=createSprite(boxPosition, boxY, 20,100); 
	  boxleftSprite.shapeColor=color("green"); 
	  boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} ); 
	  World.add(world, boxLeftBody);
	  boxBase=createSprite(boxPosition+100, boxY+40, 200,20); 
	  boxBase.shapeColor=color("Green"); 
	  boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} ); 
	  World.add(world, boxBottomBody); 
	  boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100); 
	  boxleftSprite.shapeColor=color("green"); 
	  boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} ); 
	  World.add(world, boxRightBody);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();

  paperObject.display();
   
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
	  Matter.Body.applyForce(paperObject.body , paperObject.body.position , {x:85 , y:-85});
	}
}



