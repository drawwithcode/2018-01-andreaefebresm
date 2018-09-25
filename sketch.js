function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(269, 210, 91);
	strokeWeight(2);

	//Neck
	strokeWeight(2);
	stroke(142, 0 , 44);
	line(mouseX-50, 285, mouseX-50, 345);

	//Neck left
	strokeWeight(1);
	stroke(142, 0 , 44);
	line(mouseX-60, 275, mouseX-60, 345);

	//Wheel
	noStroke();
	fill(142, 0 , 44);
	ellipse(mouseX-50, 465, 70, 70);
	//wheel details
	noStroke();
	fill(269, 210, 91);
	ellipse(mouseX-50, 465, 65, 65);

	noStroke();
	fill(142, 0 , 44);
	ellipse(mouseX-50, 465, 60, 60);

	//Body
	fill(178, 0, 70);
	rect(mouseX-100, 325, 100, 140);
	//Detail Body
	fill(269, 210, 91);
	rect(mouseX-20, 335, 10, 90);

	//Head
	fill(178, 0, 70);
	ellipse(mouseX-50, 240, 90, 90);
	//Detail 1
	fill(142, 0 , 44);
	ellipse(mouseX-30, 240, 20, 20);

	//details
	noStroke();
	fill(46, 166, 169, 30);
	ellipse(mouseX+10, mouseX-20, mouseX/2, mouseX/2);

	noStroke();
	fill(46, 166, 169, 20);
	ellipse(mouseX-110, mouseX, mouseX/4, mouseX/4);

	noStroke();
	fill(46, 166, 169, 50);
	ellipse(mouseX-50, mouseX+50, mouseX/2, mouseX/2);





}
