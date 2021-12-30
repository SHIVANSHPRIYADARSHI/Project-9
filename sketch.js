var box

function setup() {
  createCanvas(400,400);
   box= createSprite(160,150,20,20) 
}

function draw() 
{
  background("yellow");

if (keyIsDown(LEFT_ARROW)){
box.x= box.x-5
background("blue")
}

if  (keyIsDown(RIGHT_ARROW)){
  box.x= box.x+5
  background("red")
}

if (keyIsDown(UP_ARROW)) {
  box.y=box.y-5
  background("green")
}

if (keyIsDown(DOWN_ARROW)) {
  box.y=box.y+5
  background("180")
}
drawSprites()

}




