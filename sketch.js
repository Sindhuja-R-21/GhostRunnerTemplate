var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload(){
  spookySound = loadSound("spooky.wav");
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  
  
}

function setup(){
  createCanvas(600,600);

  //Creating tower sprite
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  //Creating Groups
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  //  spookySound.loop();
}

function draw(){
  background(0);
  if (gameState === "play") {
    
   //Ghost Movement
    
    
    //Tower Infinite Scrolling
   
    
    //Function calling 
    spawnDoors();

    
    //climbersGroup Touches Ghost
   
    
    //InvisibleBlockGroup touches Ghost
  
    
    drawSprites();
  }
  
   //END STATE 

}

function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    
    //Creating Door
    var door = createSprite(200, -50);
    door.addImage(doorImg);
    door.x = Math.round(random(120,400));
    door.velocityY = 1;
    door.lifetime = 800;
    
    //Creating Climber
    var climber = createSprite(200,10);
    climber.addImage(climberImg);
    climber.x = door.x;
    climber.velocityY = 1;
    climber.lifetime = 800;
    
    //Creating invisible block
    var invisibleBlock = createSprite(200,15,climber.width,2);
    invisibleBlock.x = door.x;
    invisibleBlock.velocityY = 1;
    invisibleBlock.lifetime = 800;
    
    //Making ghost Visible rather than door
    
    
    //add each door to the group
    doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

