const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

   


    ground = new Ground(580,600,350,20);
    box1 = new Box(500,580,50,50);
    box2 = new Box(555,580,50,50);
    box3 = new Box(610,580,50,50);
    box4 = new Box(665,580,50,50);
    box5 = new Box(525,550,50,50);
    box6 = new Box(580,550,50,50);
    box7 = new Box(635,550,50,50);
    box8 = new Box(550,490,50,50);
    box9 = new Box(605,490,50,50);
    box10 = new Box(575,400,50,50);

    polygon = new Ball(170,580,15);
    slingshot = new Slingshot(polygon.body,{x:170,y:500});
   
   
   
}

function draw(){
    
    background(200);
    
     
    
    Engine.update(engine);
    
    
    ground.display();

    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    polygon.display();
    slingshot.display();
   

    
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
