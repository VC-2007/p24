const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber
var iron
var stone
var ground

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,580,1200,20)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(200,200,10,10)
    iron = new Iron(100,150,10,20)
    rubber = new Rubber(200,300,10,10)
    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    ground.display();
    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    iron.display();
    
 
}