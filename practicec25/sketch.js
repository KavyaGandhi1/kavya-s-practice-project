const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var bg;

var ground;
var ground2;
var bird1;
var box1,box2,box3;

var pig1;
var log1,log2,log3;

function preload(){
bg = loadImage("sprites/bg.png");
}

function setup(){
   createCanvas(1200,700);
  
engine = Engine.create();
world = engine.world;

ground = new Ground(600,700,1200,30);


bird1 = new bird(50,200);

box1 = new Box(800,675);
box2 = new Box(900,675);

pig1 = new Pig(850,685);

log1 = new Log(850,635,20,180,PI/2);

box3 = new Box(850,600);

log2 = new Log(810,575,100,20,PI/2);

log3 = new Log(890,575,100,20,PI/2);
}

function draw(){
background(bg);
Engine.update(engine);
ground.display();

bird1.display();

box1.display();
box2.display();
pig1.display();

log1.display();

box3.display();
log2.display();
log3.display();

}