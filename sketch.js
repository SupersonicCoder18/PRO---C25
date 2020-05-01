function setup() {
  createCanvas(800,400);
}

function draw() {
  background(201, 204, 255);  
  drawRaindrop();
  drawSprites();
}

function drawRaindrop() {
  if (World.frameCount % 2 === 0) {
    rand1 = random(20, 780);
    var raindrop = createSprite(rand1, 10, 5, 20);
    raindrop.shapeColor = "blue";
    raindrop.velocityY = 10;
    raindrop.lifetime = 40;
  }
}