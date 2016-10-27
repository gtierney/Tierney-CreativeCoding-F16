var xPos=1; 
var yPos=1; 

var xVelocity=5; 
var yVelocity=3;

var xDirection=1;
var yDirection=1;

function preload(){
  bounceSound=loadSound("bouncebounce.mp3")
}

function setup(){
  createCanvas(400,400);
  background(200);
  bounceSound.play();
}

function draw(){
  background(200);
  ellipse(xPos, yPos, 100, 100);
  bounceSound.play();
  
  xPos = xPos + xVelocity;
  yPos = yPos + yVelocity;

  
  if (xPos >= width || xPos <= 0){
    xDirection = -xDirection; 
    xVelocity = xVelocity * xDirection;
  }
  
  if(yPos >= height || yPos <= 0){
    yDirection = -yDirection;
    yVelocity = yVelocity * yDirection;
  }
  
}