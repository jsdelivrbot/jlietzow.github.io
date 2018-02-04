var GRAVITY = 0.3;
var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;

function setup() {
    createCanvas(400, 300);
    background(150, 200, 250);
    groundSprites = new Group();
    numGroundSprites = width/GROUND_SPRITE_WIDTH + 1;
    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
    }
}

function draw() {
    drawSprites();
}