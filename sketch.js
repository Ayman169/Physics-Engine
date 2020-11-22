const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box;

function setup(){
    createCanvas(600,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    var boxop = {
        isStatic : true
    }

    box = Bodies.rectangle(300,300,50,100,boxop);
    World.add(myWorld,box);


}

function draw(){
    background(0);
    console.log(box.position.y)

    Engine.update(myEngine);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,100);
}