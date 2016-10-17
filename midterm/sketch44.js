//midterm death star

var mySquareColor;
var offset = 40;
var r=10;
var g=175;
var b=200;
var colorshift=50;
var colorshift2=5;

function setup (){
	createCanvas(800, 600);
	background(0);
	noStroke();
}

function draw (){
	push(); //background pattern
	noStroke();
	for (var i = 0; i < 100; i++) {
		fill (r-(i*colorshift), g+(i*colorshift), b-(i*colorshift));
		for (var j = 0; j < 100; j++) {
			fill (r+(j*colorshift2), g+(j*colorshift2), b-(i*colorshift2));
		rect ((i*offset)+10, (j*offset)+10, 1, 1);
		};
	};
	translate(1,1);
	rotate(PI/50);
	for (var i = 0; i < 100; i++) {
		fill (r-(i*colorshift), g+(i*colorshift), b-(i*colorshift));
		for (var j = 0; j < 100; j++) {
			fill (r+(j*colorshift2), g+(j*colorshift2), b-(i*colorshift2));
		rect ((i*offset)+10, (j*offset)+10, 1, 1);
		};
	};
	translate(1,2);
	rotate(PI/6);
	for (var i = 0; i < 100; i++) {
			fill (r-(i*colorshift), g+(i*colorshift), b-(i*colorshift));
		for (var j = 0; j < 100; j++) {
			fill (r+(j*colorshift2), g+(j*colorshift2), b-(i*colorshift2));
			rect ((i*offset)+10, (j*offset)+10, 1, 1);
		};
	};
	pop();

	push(); //gradient for square pattern
			//map(old value, inputMin, inputMax, outputMin, outputMax)
		mappedColor= map(mouseY, height, 0, 255, 100);
		if(mouseIsPressed){
			squareColor(mappedColor);
		}
	pop();

	//middle yellow lazer loop
	if (keyIsPressed) {
		fill(255, 0, 99); //pink
	}
	else {
		fill(255,255,0) //yellow
	}
	
	for (var j = 0; j < 150; j=j+8) {
			rect(115+j/.3, 300-j, 4, 5);
		}
	

	push(); //death star
	ellipseMode(CORNER);
		if (keyIsPressed) {
			fill (50);
		}
		else {
			fill(100);
		}
	ellipse(400,80,300,300);
	ellipseMode(CORNERS);
		if (keyIsPressed) {
			fill(0);
		}
		else {
			fill(20);
		}
	translate (450,35);
	ellipse(100,100,190,190)
	pop();

	push(); //death star curve
	translate(400,135);
	stroke(0);
	strokeWeight(3);
	noFill();
	//curve(control point x, control point y, first point x, first point y, second point x, second point y, ending x, ending y)
	curve(-100,-90,0, 100, 300, 100, 500,-90);
	pop();

	push();
		translate(50,50);
		rotate(5*PI/8);
		if (keyIsPressed) {
				fill(19, 248, 70); //green
		}		
		else {
			fill(19, 248, 255); //blue
		}
		triangle(0, 20,20,20,10,0); //top triangle
	pop();

	push();
		translate(100, 300);
		rotate(PI/3);
		if (keyIsPressed) {
				fill(0, 200, 255); //blue
		}		
		else {
			fill(19, 248, 70); //green
		}
		triangle(0, 20,20,20,10,0); // middle triangle
	pop();

	push();
		translate(500,500);
		if (keyIsPressed) {
				fill(255, 255, 0); //yellow
		}		
		else {
			fill(255, 0, 99); //pink
		}
		triangle(0, 20,20,20,10,0); // bottom triangle
	pop();

	//bottom blue lazer loop
	if (keyIsPressed) {
		fill(255,0,0); //blue
	}
	else {
		fill(0,255,255); //red
	}
	for (var j = 0; j < 130; j=j+5) {
			rect(510, 500-j, 1, 1);
		};
	push(); //top red lazer line
		translate(50,50);
		rotate(11*PI/6);
		noFill();
		strokeWeight(1);
		if (keyIsPressed) {
			stroke(255,255,0);
		}
		else {
			stroke(255,0,0);
		}
		
		line(0,10,230,300);
	pop();

}

//square pattern for when mouse is pressed
function squareColor(mySquareColor){
	fill(mySquareColor);
	rect(mouseX, mouseY, 8,8);
	translate(3,3);
	triangle(mouseX, mouseY, mouseX-2.5,mouseY-7.5,mouseX-7.5,mouseY-3.7);
	translate(2,2);
	triangle(mouseX, mouseY, mouseX+2.5,mouseY+7.5,mouseX+7.5,mouseY+3.7);
}








