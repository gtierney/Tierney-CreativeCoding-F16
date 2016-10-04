var rectwidth = 2;

function setup (){
	createCanvas(800,400);
	background (0,0,0);

}

function draw () {

	strokeWeight(rectwidth);
	stroke(255,255,255);

	for (var i=0; i < width; i = i+10) {
  		line(i, 0, i, height);
	}
//top right 

	quad(width/2, 0, 600, 0, width, height/2, 600, height/2);

//top left
	quad(width/4, 0, width/2, 0, width/4, height/2, 0, height/2);
//bottom left
	quad(0, height/2, width/4, height/2, width/2, height, width/4, height);
//bottom right
	quad(600, height/2, width, height/2, 600, height, width/2, height);
	
	stroke(0,0,0);
	strokeWeight(rectwidth);
	//top left
	for (var i = 5; i < height/2; i = i+7) {
  		line(200, i, (400)-i, i);
	}
	for (var i = 5; i < height/2; i = i+7) {
  		line(200-i, i,200-i+i, i);
	}
//top right
	for (var i = 5; i < height/2; i = i+7) {
  		line(400+i, i,600, i);
  	}
  	for (var i = 5; i < height/2; i = i+7) {
  		line(600+i, i,600, i);
  	}
//bottom left
  	for (var i = 200; i < height; i = i+7) {
  		line(0+i, i,200, i);
  	}
  	for (var i = 200; i < height; i = i+7) {
  		line(0+i, i,i-200, i);
  	}
//bottom right
	for (var i = 200; i < height; i = i+7) {
  		line(1000-i, i,800-i, i);
  	}
  	


}