function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  noStroke();
  fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  
  circle(random(width), random(height), 24)
}