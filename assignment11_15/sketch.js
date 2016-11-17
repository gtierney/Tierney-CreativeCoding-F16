var myData;
var x =0;
var y = 0;
var w = 80;
var offset = 100;

function preload(){
	myData = loadJSON("assets/space.json");
}

function setup(){
	createCanvas(600,600);

	println(myData.people.length);

	textSize(14);

	for(var i=0; i < myData.people.length; i++){
		println(myData.people[i].name);
	}

}


function draw(){
	background(200);

	push();

	translate(300,200)

	for(var i=0; i < myData.people.length; i++){

		var myPop = myData.people[i].population;
		var myName = myData.people[i].name;

		fill(0,0,200);

		rect(i*offset,y,w,myPop);

		text(myName, i*offset, -40, 80, 40);
		
	}
	
	pop();
}