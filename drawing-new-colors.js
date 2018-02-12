function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'O') {
    fill(200, 100, 10);
  } else if (key == 'G') {
    fill(150, 200, 100);
  } else if (key == 'P') {
    fill(150, 0, 200); 
  }
}
