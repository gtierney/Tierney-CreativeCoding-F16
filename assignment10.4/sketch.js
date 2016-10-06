var rectHeight=20;
var rectWidth=40;

function setup (){
	createCanvas(500,300);
	background(75,205,205);
}

function draw () {
	push();
		translate(100, 100);
		rotate(PI/4);
		rect(0,0, rectWidth,rectHeight);
	pop();
	push();
		translate(200,100);
		rotate(PI/2);
		rect(0,0,rectWidth,rectHeight);
	pop();
	push();
		translate(300,130);
		rotate(PI);
		rect(0,0,rectWidth,rectHeight);
	pop();
	push();
		translate(380,110);
		rotate(2*PI/3);
		rect(0,0,rectWidth,rectHeight);
	pop();
}