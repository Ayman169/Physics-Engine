const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box,ground;

function setup(){
    createCanvas(600,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

   
    box = new Box(300,300,50,100);
    box2 = new Box(320,150,50,50);

    ground = new Ground(300,590,600,20);
}

function draw(){
    background(0);
   

    Engine.update(myEngine);
    box.display();
    box2.display();
    ground.display();
}