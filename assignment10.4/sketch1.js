var rectWidth=40;
var rectHeight=20;

function setup(){
	createCanvas(500,500);
	background(20,205,225);
}

function draw(){
	
	for(var i=1; i<5; i++){
		push();
			translate((100)*i, (50)*i);
			rotate((PI/4)-i);
			rect(0,0, rectWidth,rectHeight);
		pop();
	}
	
}

