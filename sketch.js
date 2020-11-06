var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []

var score = 0
var particle;
var turn = 0

gameState = "play"
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    if(gameState === "play"){
      mousePressed();
    }

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
   
   text("Score:"+score,700,50)
   textSize(40)
   text("500",250,650)
   text("100",330,650)
   text("100",410,650)
   text("100",490,650)
   text("500",170,650)
   text("500",90,650)
   text("500",10,650)
   text("200",570,650)
   text("200",650,650)
   text("200",730,650)
   
  
   
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
     
   
    
   
  
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   stroke ("yellow")
   line (0.5,450,1203123,10)

   
}
function mousePressed(){
  
  if(gameState !== "end"){
    turn++
    
    
    
      particle = new Particle(mouseX,10,10,10)
      
      particle.display();
      
      
  }
  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score = score+500
        particle = null
        if(turn>=5){
          gameState = "end"
        }
      }
    }
  }
  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760){
      if(particle.body.position.x>301 && particle.body.position.x<600){
        score = score+100
        particle = null
        if(turn>=5){
          gameState = "end"
        }
      }
    }
  }
  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760){
      if(particle.body.position.x>600){
        score = score+200
        particle = null
        if(turn>=5){
          gameState = "end"
        }
      }
    }
  }
}