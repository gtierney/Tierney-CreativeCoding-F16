//inclass notes/exercise 9/29

var d=20;       //first was 300
var offset=30;   //first was 50
var padding = 50;
var myPos=0;

function setup (){
	createCanvas(600,600);

}


function draw (){

	//ellipse(width/2, height/2, d, d);
	//ellipse(width/2, height/2, d-20, d-20);

	//start condition, exit condition, iteration
	//for(var i=0; i<10; i++){
		//ellipse(width/2, height/2, d-(i*offset), d-(i*offset));
	//}

	//these are all the same:
	// i = i + i;
	//i+=1; 
	//i++;

//row of circles - for loop
	// for(var i=0; i<10; i++){
	// 	ellipse(width/2+(i*offset), height/2, d, d);
	// }


//nesting for loops for 2 dimentional shapes
	/*for(var j = 0; j < 8; j+=1){
		for(var i = 0; i < 10; i+=1){
			//when i is 0, d-i = 300
			//when i is 1, d-i=299

			ellipse((i * offset)+padding, (j * offset)+padding, d, d);
		}
		
	}
	*/

	while(myPos < width){
		rect(myPos, height/2, 30, 20);

		myPos = myPos + 40;
	}


}