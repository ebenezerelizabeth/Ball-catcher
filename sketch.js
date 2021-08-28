var catcher, ball, count, wrongball
var img1, img2;
function preload()
{
  img1 = loadImage("bowl.png")
  img2 = loadImage("badboy.png")
  
  }




function setup()
{
 catcher = createSprite(100,380, 40, 40);
 //catcher.setAnimation("bowl");
  catcher.addImage(img1)
  
  
 ball = createSprite(6,9,9,0);
 wrongball = createSprite(68,0,10,10);
 ball.visible=false;
 count = 0;

}

function draw() 

{
    background("white");
    catcher.x =World.mouseX;
    fallball(); 
    badball();
  
  if(catcher.isTouching(ball))
    {
    count = count+1;
    ball.visible = false;
    console.log("hiiii");
  }

  if(catcher.isTouching(wrongball))
  {
    count = count-1;
    wrongball.visible = false;
    console.log("hiiii");
  }
  
drawSprites();
textSize(18);
textFont("Arial");
fill("red");
text("score: " +count, 300, 70);
}
 
 
 
 
 
 
function fallball() 
{
  if(World.frameCount %30==1)
  {
  ball = createSprite (Math.round(random(0,400)),  0,  10,10 );
  ball.velocityX = 0;
  ball.velocityY = 19;
  console.log(World.frameCount); 
   
  }
  
}
  
function badball() 

{
  if(World.frameCount %30==1)
  {
  wrongball = createSprite (Math.round (random(0,400)),  0,  10,10 );
  wrongball.velocityX = 0;
  wrongball.velocityY = 19;
  console.log(World.frameCount); 
  //wrongball.setAnimation("donttouch");
    wrongball.addImage(img2)
  wrongball.scale = 0.2;
  }

}
  
