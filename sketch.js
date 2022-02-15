var backgroundImage;
var aircraft, aircraftImage
var missile, missileImage;

function preload() {
  backgroundImage = loadImage("assets/bg.jpg");

  aircraftImage = loadImage("assets/aircraft.png");

  enemyImage = loadImage("assets/enaircraft.png");

  missileImage = loadImage("assets/missile.png")

  steelImage = loadImage("assets/steel.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight - 1);

  bg = createSprite(width / 2, height / 2)
  bg.addImage(backgroundImage)
  bg.scale = 2.4

  aircraft = createSprite(width - 120, height / 2 + 70);
  aircraft.addImage(aircraftImage)
  aircraft.scale = 0.4
  

  wallT = createSprite(width / 2, 45, width, 10);
  wallT.addImage(steelImage)
  wallT.scale = 1.08
  //wallT.visible = false;

  

  wallB = createSprite(width / 2, height, width, 10);
  wallB.visible = false;

  enemyGroup = new Group();
  missileGroup = new Group();
}

function draw() {
  background(0);
  drawSprites()

  if (keyDown("down")) {
    aircraft.y = aircraft.y + 5
  }

  if (keyDown("up")) {
    aircraft.y = aircraft.y - 5
  }


  createEnemies()

  aircraft.collide(wallB)
  aircraft.collide(wallT)
  enemyGroup.collide(wallB)
  enemyGroup.collide(wallT)
 
}


function keyReleased() {
  if(keyCode == 32){
    createMissiles()
  }
}

function createEnemies() {
  if (frameCount % 170 == 0) {
    enemy = createSprite(-50 , round(random(140 , height-30)) )
    enemy.velocityX = 5
    enemy.addImage(enemyImage)
    enemy.scale = 0.22
    enemyGroup.add(enemy)
  }
}

function createMissiles() {
 
  missile = createSprite(aircraft.x,aircraft.y);
  missile.addImage(missileImage)
  missile.scale = 0.2
  missile.velocityX = -5
  missileGroup.add(missile)
  
}

