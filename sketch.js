var a;
var circles=[];
var ground  ;
var block1,block2,block3,block4,block5,block6,block7,block8,block9
function setup() {
  var canvas = createCanvas(1200,400);
  block1 = new Box(330,235)
  block2 = new Box(360,235)
  block3 = new Box(390,235)
  block4 = new Box(420,235)
  block5 = new Box(450,235)
  block6 = new Box(360,195)
  block7 = new Box(390,195)
  block8 = new Box(420,195)
  block9 = new Box(390,155)
  
  circles.push(width/2)
  //ground = new Ground(600,10,1200,20);
}

function draw() {

  background(0);  
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  
  

 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 