const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var hit1, hit2;
var sling1;
var bg, backgroundImg;

function preload() {
  ChangeBg();
}

function setup() {
  var canvas = createCanvas(1200,900);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground1 = new Ground(390, 270, 340, 10);
  //ground2 = new Ground(790, 240, 340, 10)

  var ground_options={
    restitution: 1,
    isStatic: true
  }
  //ground = Bodies.rectangle(1200,900,1200,10,ground_options);

  //down row
  box1 = new Box(140, 220, 40, 40);
  box2 = new Box(160, 220, 40, 40);
  box3 = new Box(180, 220, 40, 40);
  box4 = new Box(200, 220, 40, 40);
  box5 = new Box(220, 220, 40, 40);
  box6 = new Box(240, 220, 40, 40);

  //middle row
  box7 = new Box(160, 200, 40, 40);
  box8 = new Box(180, 200, 40, 40);
  box9 = new Box(200, 200, 40, 40);
  box10 = new Box(220, 200, 40, 40);

  //up row
  box11 = new Box(180, 180, 40, 40);
  box12 = new Box(200, 180, 40, 40);
  box13 = new Box(190, 160, 40, 40);

  //down row
  box19 = new Block(340, 105, 40, 40);
  box14 = new Block(360, 105, 40, 40);
  box15 = new Block(380, 105, 40, 40);
  box16 = new Block(400, 105, 40, 40);
  box17 = new Block(420, 105, 40, 40);
  box18 = new Block(440, 105, 40, 40);

  //middle row
  box20 = new Block(360, 85, 40, 40);
  box21 = new Block(380, 85, 40, 40);
  box22 = new Block(400, 85, 40, 40);
  box23 = new Block(420, 85, 40, 40);

  //top row
  box24 = new Block(380, 65, 40, 40);
  box25 = new Block(400, 65, 40, 40);
  box26 = new Block(390, 45, 40, 40);

  hit1 = new Hitter(100, 190, 50, 580);

  sling1 = new SlingShot(hit1.body, { x: 100, y: 140 });

  Engine.run(engine);

}


function draw() {
  if (backgroundImg) {
    background(backgroundImg);
  }
  else{
    background("white");
  }

  Engine.update(engine);

  //ground1.display();
  //ground2.display();

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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hit1.display();
  sling1.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hit1.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  sling1.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling1.attach(hit1.body);
  }
}

async function ChangeBg() {
  var Response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
  var ResponseJson = await Response.json()
  var Date = ResponseJson.datetime;
  var Time = Date.slice(11, 13);

  if (Time >= 06 && Time<= 18) {
    bg = "bg.png";
  }
  else {
    bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);

}


