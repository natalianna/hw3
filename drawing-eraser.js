function setup() { 
  createCanvas(400, 400);
	background (255);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'D') {
    noStroke()
		(diameter = 30);
}}
