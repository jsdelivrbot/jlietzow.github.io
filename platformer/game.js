var GRAVITY = 0.3;
var JUMP = -5;
var groundSprites;
var obstacleSprites;
var GROUND_SPRITE_WIDTH = 128;
var GROUND_SPRITE_HEIGHT = 128;
var numGroundSprites;
var player;
var backgroundImage;
var isGameOver;
var isAirborne;
var score;

function preload() {
//    playerImage = loadImage("media/playerShip2_blue.png");
    backgroundImage = loadImage("media/bg_jungle.png");
}

function setup() {
    isGameOver = false;
    isAirborne = false;
    isJumping = false;
    score = 0;
    createCanvas(1280, 720);
//    background(150, 200, 250);
    groundSprites = new Group();
    obstacleSprites = new Group();
    numGroundSprites = (width/GROUND_SPRITE_WIDTH) + 1;
    for (var n = 0; n < (numGroundSprites + 1); n++) {
        var groundSprite = createSprite(n*GROUND_SPRITE_WIDTH, height-(GROUND_SPRITE_HEIGHT/2), GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        var groundSpriteImage = loadImage("media/jungle_pack_05.png");
        groundSprite.addImage(groundSpriteImage);
        groundSprites.add(groundSprite);
    }
    player = createSprite(100, height-(GROUND_SPRITE_HEIGHT), 50, 50);
}

function draw() {
    background(backgroundImage);
    if (isGameOver) {
        background(0);
        fill(255);
        textAlign(CENTER);
        text("Your score was: " + score, camera.position.x, camera.position.y - 20);
        text("Game Over! Click anywhere to restart", camera.position.x, camera.position.y);
    } else {
        background(150, 200, 250);
        player.velocity.y = player.velocity.y + GRAVITY;
        if (groundSprites.overlap(player)) {
            player.velocity.y = 0;
            player.position.y = (height-GROUND_SPRITE_HEIGHT) - (player.height/2);
            isAirborne = false;
        }
        if(keyDown(UP_ARROW) && player.position.y > player.height && (!isAirborne || isJumping)) {
            player.velocity.y = JUMP;
            isJumping = true;
            isAirborne = true;
        }
        else {
            isJumping = false;
        }
        player.position.x = player.position.x + 5;
        camera.position.x = player.position.x + (width/4);
        var firstGroundSprite = groundSprites[0];
        if (firstGroundSprite.position.x <= camera.position.x - (width/2 + firstGroundSprite.width/2)) {
            groundSprites.remove(firstGroundSprite);
            firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
            groundSprites.add(firstGroundSprite);
        }
        if (random() > 0.97) {
//        if (random() > 1.00) {
            var obstacle = createSprite(camera.position.x + width, random(0, (height-GROUND_SPRITE_HEIGHT)-15), 30, 30);
            obstacleSprites.add(obstacle);
        }
        var firstObstacle = obstacleSprites[0];
        if (obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width/2 + firstObstacle.width/2)) {
            removeSprite(firstObstacle);
        }
        obstacleSprites.overlap(player, endGame);
        drawSprites();
        score += 1;
        textAlign(CENTER);
        text(score, camera.position.x, 10);
    }
}

function endGame() {
    isGameOver = true;
}

function mouseClicked() {
    if (isGameOver) {
        for (var n = 0; n < numGroundSprites; n++) {
            var groundSprite = groundSprites[n];
            groundSprite.position.x = n*GROUND_SPRITE_WIDTH;
        }
        player.position.x = 100;
        player.position.y = height-75;
        obstacleSprites.removeSprites();
        score = 0;
        isGameOver = false;
        isJumping = false;
        isAirborne = false;
    }
}