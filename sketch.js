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

	//Body Contour
	fill(255, 255, 255);
	rect(mouseX-102, 325, 100, 140);
	//Body
	fill(178, 0, 70);
	rect(mouseX-100, 325, 100, 140);
	//Detail Body
	fill(269, 210, 91);
	rect(mouseX-20, 425, 10, -mouseX/6);
	//Shade Detail Body
	fill(142, 0 , 44);
	rect(mouseX-10, 335, 2, 90);
	//Shade Detail Body 1
	fill(142, 0 , 44);
	rect(mouseX-20, 425, 12, 2);

	//Head
	fill(178, 0, 70);
	ellipse(mouseX-50, mouseX/20+250, 90, 90);
	//Detail 1
	fill(142, 0 , 44);
	ellipse(mouseX-30, mouseX/20+230, 20, 20);
	//lines
	strokeWeight(0,5);
	stroke(178, 0, 70);
	line(mouseX-50, 240, mouseX+100, mouseY);

	//Lines
	strokeWeight(1);
	stroke(255,255,255);
	line(mouseX-120, 340, mouseX-103, 340);
	//detail
	fill(178, 0, 70);
	ellipse(mouseX-120, 340, 5, 5);

	//Liness
	strokeWeight(1);
	stroke(255,255,255);
	line(mouseX-120, 360, mouseX-103, 360);
	//detail
	fill(178, 0, 70);
	ellipse(mouseX-120, 360, 5, 5);

	//Lines
	strokeWeight(1);
	stroke(255,255,255);
	line(mouseX-120, 380, mouseX-103, 380);
	//detail
	fill(178, 0, 70);
	ellipse(mouseX-120, 380, 5, 5);

	//Lines
	strokeWeight(1);
	stroke(255,255,255);
	line(mouseX-120, 400, mouseX-103, 400);
	//detail
	fill(178, 0, 70);
	ellipse(mouseX-120, 400, 5, 5);

	//Lines
	strokeWeight(1);
	stroke(255,255,255);
	line(mouseX-120, 420, mouseX-103, 420);
	//detail
	fill(178, 0, 70);
	ellipse(mouseX-120, 420, 5, 5);

	//Lines
	strokeWeight(1);
	stroke(255,255,255);
	line(mouseX-120, 440, mouseX-103, 440);
	//detail
	fill(178, 0, 70);
	ellipse(mouseX-120, 440, 5, 5);



}
