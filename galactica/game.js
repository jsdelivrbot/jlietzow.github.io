var player;
var playerImage;
var laser;
var laserImage;
var enemy1, enemy2, enemy3, enemy4;
var enemyImage1, enemyImage2, enemyImage3, enemyImage4;
var backgroundImage;
var score;
var loseSound = new Audio("media/sfx_lose.ogg");
var laserSound = new Audio("media/sfx_laser1.ogg");
var explosionSound = new Audio("media/explosion.wav");

function preload() {
    playerImage = loadImage("media/playerShip2_blue.png");
    laserImage = loadImage("media/laserBlue01.png");
    enemyImage1 = loadImage("media/meteorBrown_small1.png");
    enemyImage2 = loadImage("media/meteorBrown_med3.png");
    enemyImage3 = loadImage("media/meteorBrown_small2.png");
    enemyImage4 = loadImage("media/meteorBrown_med1.png");
    backgroundImage = loadImage("media/700blue.png");
}

function setup() {
    createCanvas(700,700);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    laser = createSprite(width/2, height-(playerImage.height+laserImage.height/2), 0, 0);
    laser.addImage(laserImage);
    laser.visible = false;
    enemy1 = createSprite(width/2,0,0,0);
    enemy1.addImage(enemyImage1);
    enemy1.rotationSpeed = 4.0;
    enemy2 = createSprite(width/4,0,0,0);
    enemy2.addImage(enemyImage2);
    enemy2.rotationSpeed = 5.0;
    enemy2.visible = false;
    enemy3 = createSprite(3*width/2,0,0,0);
    enemy3.addImage(enemyImage3);
    enemy3.rotationSpeed = 6.0;
    enemy3.visible = false;
    enemy4 = createSprite(width/3,0,0,0);
    enemy4.addImage(enemyImage4);
    enemy4.rotationSpeed = 8.0;
    enemy4.visible = false;
    isGameOver = false;
    isLaserFired = false;
    isEnemy2Drawn = false;
    isEnemy3Drawn = false;
    isEnemy4Drawn = false;
    score = 0;
    
}
function draw() {
    background(backgroundImage);
    fill("white");
    textSize(18);
    text(nfs(score,6,0),width-100,20);
    
    if(isGameOver) {
        gameOver();
    } else {
        // check for collision with enemy - game over
        if(enemy1.overlap(player) || enemy2.overlap(player) || enemy3.overlap(player) || enemy4.overlap(player)) {
            isGameOver = true;
            loseSound.play();
        }
        // check for hit on enemy - explosion
        if(enemy1.overlap(laser)) {
            explosionSound.play();
            score += 100;
            enemy1.position.y = 0;
            enemy1.position.x = random(5,width-5);
            laser.visible = false;
            laser.position.y = height - (playerImage.height + laserImage.height/2);
            isLaserFired = false;
        }
        if(enemy2.overlap(laser)) {
            explosionSound.play();
            score += 100;
            enemy2.position.y = 0;
            enemy2.position.x = random(5,width-5);
            laser.visible = false;
            laser.position.y = height - (playerImage.height + laserImage.height/2);
            isLaserFired = false;
        }
        if(enemy3.overlap(laser)) {
            explosionSound.play();
            score += 100;
            enemy3.position.y = 0;
            enemy3.position.x = random(5,width-5);
            laser.visible = false;
            laser.position.y = height - (playerImage.height + laserImage.height/2);
            isLaserFired = false;
        }
        if(enemy4.overlap(laser)) {
            explosionSound.play();
            score += 100;
            enemy4.position.y = 0;
            enemy4.position.x = random(5,width-5);
            laser.visible = false;
            laser.position.y = height - (playerImage.height + laserImage.height/2);
            isLaserFired = false;
        }

        //read keyboard input
        if(keyDown(RIGHT_ARROW) && player.position.x < (width-(playerImage.width/2))) {
            player.position.x += 3;
        }
        if(keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
            player.position.x -= 3;
        }
        if(!isLaserFired && keyDown(32)) {
            laserSound.play();
            isLaserFired = true;
            laser.position.x = player.position.x;
            laser.visible = true;
        }
        
        //advance laser position
        if (isLaserFired) {
            laser.position.y -= 6;
            if (laser.position.y < 1) {
                laser.visible = false;
                laser.position.y = height - (playerImage.height + laserImage.height/2);
                isLaserFired = false;
            }
        }
        
        //advance enemy positions
        enemy1.position.y += 3;
        if (enemy1.position.y>height) {
            enemy1.position.y = 0;
            enemy1.position.x = random(5, width-5);
            score += 10;
        }
        if (isEnemy2Drawn) {
            enemy2.position.y += 3;
            if (enemy2.position.y > height) {
                enemy2.position.y = 0;
                enemy2.position.x = random(5,width-5);
                score += 10;
            }
        } else {
            if (enemy1.position.y > height/4) {
                enemy2.visible = true;
                isEnemy2Drawn = true;
            }
        }
        if (isEnemy3Drawn) {
            enemy3.position.y += 3;
            if (enemy3.position.y > height) {
                enemy3.position.y = 0;
                enemy3.position.x = random(5,width-5);
                score += 10;
            }
        } else {
            if (enemy1.position.y > height/2) {
                enemy3.visible = true;
                isEnemy3Drawn = true;
            }
        }
        if (isEnemy4Drawn) {
            enemy4.position.y += 3;
            if (enemy4.position.y > height) {
                enemy4.position.y = 0;
                enemy4.position.x = random(5,width-5);
                score += 10;
            }
        } else {
            if (enemy1.position.y > 3*height/4) {
                enemy4.visible = true;
                isEnemy4Drawn = true;
            }
        }
        drawSprites();
    }
}
function gameOver() {
  background(0);
  textAlign(CENTER);
  text("Game Over!", width/2, height/2);
  text("Final Score  " + nfs(score,5,0),width/2, height/2+40);
  text("Click anywhere to try again", width/2, 5*height/8);
}
function mouseClicked() {
    if(isGameOver) {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-(playerImage.height/2);
        enemy1.position.x = width/2;
        enemy1.position.y = 0; 
        enemy2.position.x = width/4;
        enemy2.position.y = 0;
        enemy2.visible = false;
        enemy3.position.x = 3*width/4;
        enemy3.position.y = 0;
        enemy3.visible = false;
        enemy4.position.x = width/3;
        enemy4.position.y = 0;
        enemy4.visible = false;
        isEnemy2Drawn = false;
        enemy3.visible = false;
        isEnemy3Drawn = false;
        enemy4.visible = false;
        isEnemy4Drawn = false;
        score = 0;
    }

}