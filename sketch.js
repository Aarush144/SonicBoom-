var monkey, monkey_running;


var bananaImage;

var obstacleImage;

var obstacle, obstacleGroup1, obtstacleGroup2;



var score;

var survivalTime;

var ground, groundimg, invisibleGround;


var back, bg, background;


var bananaGroup1, bananaGroup2;


var banana3;



var sonicSound;


var jump;


var ringCollectingSound;


var gameOverSound;



var gameState = PLAY;


var START = 1;

var PLAY = 2;


var END = 0;



function preload() {


  // sonic animation
  monkey_running = loadAnimation("https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/12bf9842-5e7e-4276-b014-2871d914eac2.png", "https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/5872c4ab-6a11-48a1-b334-ff352169e4e2.png", "https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/2a88efd3-e912-4951-bc0c-d1c6f83c3a48.png", "https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/b551cd72-7ca1-4a17-9792-e1a94bbcb059.png", "https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/39d57c15-2e0d-4caf-bddd-95d332dc7215.png", "https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/8eb0e289-a7f5-4e42-a6a6-bed506ab5423.png", "https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/389b060c-98c0-4217-b4a1-2f8bef1166fd.png", "https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/b7476646-16e3-49c0-8e19-e6ac4b25036e.png", "https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/36ee802d-2bb1-4747-991b-178f01c1bf1d.png", "https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/0f3158da-b136-43a8-b96d-58f405c7d288.png");





  // ground anmation
  groundimg = loadImage("https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/02913e20-ad60-46f3-8e36-39f4295e25cf.png");
  
  
  // rings 
  bananaImage = loadImage("0i8m3s1p8avrb77pj3k9jbl437-56525c840c5efc8522dac25bf054f651.png");
  
  
  // eggman
  obstacleImage = loadAnimation("https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/8fff79fa-c6c2-4a2d-aa7f-59f2db7d84f8.png");
  
  
  // back
  back = loadImage("https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/1c982dea-a44e-4631-b2bc-d9a6b2f770b2.png");
  
  
  // theme sound
  sonicSound = loadSound("https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/8511bfa5-96fa-48bb-8a52-0e476ad4498d.mp3");


  // game over sound 
  gameOver = loadImage("https://static.wixstatic.com/media/bc193a_65802df31fe24c0a96e90bd3576bcee1~mv2.png");


 

// jump animation 
  jump = loadAnimation("https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/47a9bfde-15dd-433e-97cf-40a24200e5b3.png", "https://assets.editor.p5js.org/5fa7d0a3574dc2002487b586/47a9bfde-15dd-433e-97cf-40a24200e5b3.png");
  
  
  
  
  // ring collecting sound
  ringCollectingSound = loadSound("sonic_-_rings.mp3");
  
  
  
  // game over sound 
  gameOverSound = loadSound("mixkit-arcade-retro-game-over-213.wav");
  

  
}



function setup() {
  
  // creating canvas 
  createCanvas(windowWidth, 450);

  
  
  // survival time
  score = 10;

  // score
  survivalTime = 0;



  // creating ground
  ground = createSprite(0, 250);
  ground.addImage("ground", groundimg);

  
  
  // creating sonic
  monkey = createSprite(70, 300);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 1;
  monkey.frameDelay = 4;
  monkey.vsible = true;

  
  

  // inv ground 
  invisibleGround = createSprite(70, 380, 700, 10);
  invisibleGround.visible = false;

  
  
  // creating grps
  bananaGroup1 = new Group();
  bananaGroup2 = new Group();
  obstacleGroup1 = new Group();
  obstacleGroup2 = new Group();
  
  
  
  // playing theme sound
 sonicSound.loop();

  
  // creating 3 rd banana 
  banana3 = createSprite(windowWidth, 120);
  banana3.y = round(random(200, 400));
  banana3.addImage("banana", bananaImage);
  banana3.velocityX = -3;
  banana3.scale = 0.1;


  




  


}


function draw() {


  // function
  StopSpeed();






  if (frameCount > 100) {
    monkey.frameDelay = 3;
  }

  
  
  
  if (frameCount > 300) {
    monkey.frameDelay = 2.5;
  }

  
  
  if (frameCount > 500) {
    monkey.frameDelay = 2;
  }

  
  
  if (frameCount > 900) {
    monkey.frameDelay = 1.5;
  }

  
  
  
  
  if (frameCount > 1500) {
    monkey.frameDelay = 1;
  }
  
  
  
  
  if (frameCount > 2500) {
    monkey.frameDelay = 0.5;
  }

  
  // spawning obs with framr rates
  if (frameCount % 380 === 0) {
    
    // function
    spawnObstacles();
    
    
  }

  
  
  console.log("ground.velocityX = " + ground.velocityX)


  
  
  console.log(monkey.frameDelay);

  
  // ground velocity
  ground.velocityX = -(frameCount / 100);

  
  // infinity ground 
  if (ground.x < -230) {
    ground.x = 600;
  }


 // decreasing survival time with frame rate
  if (frameCount % 75 === 0) {
    score = score - 1;
  }


 // jumping the sonic 
  if (keyDown("space") && monkey.y > 300) {
    
    
    monkey.velocityY = -21 ;
    
    // adding animation
    monkey.addAnimation("jump", jump);
  }
  
  
  
  
  
  //adding gravity
  monkey.velocityY = monkey.velocityY + 0.9;


  // coliding monkey
  monkey.collide(invisibleGround);

  // functions 
  spawnBananas1();
  spawnBananas2();



// sonic  touching rings then
  if (monkey.isTouching(bananaGroup1)) {
    
    
    // the whole banana grp will be destroyed
    bananaGroup1.destroyEach();
    
    
     // survival time  will be + 3
    score = score + 3;
    
    
    // score increasement 
    survivalTime = survivalTime + 1;
    
    
    // sound 
    ringCollectingSound.play();

  }
  
  
  // sonic  touching rings then
  if (monkey.isTouching(bananaGroup2)) {
    
    
    // the whole banana grp will be destroyed
    bananaGroup2.destroyEach();
    
    // survival time will be + 3
    score = score + 3;
    
  //  score increasement
    survivalTime = survivalTime + 2;
    
    // sound
    ringCollectingSound.play();
    
  }
  
  
  
  // sonic  touching rings then
  if (monkey.isTouching(banana3)) {
    
    // settig position 
    banana3.y = 1000;
    
    // survival time is plus
    score = score + 3;
    
    // score time 
    survivalTime = survivalTime + 3;
    
    ringCollectingSound.play();
  }

  
  // end gameState condition by touching eggman
  if (monkey.isTouching(obstacleGroup1) || monkey.isTouching(obstacleGroup2)) {
    
    
    // end 
    gameState = END;
    
    // game over sound
    gameOverSound.play();
  }


  


  
  //drawSprites  and functions
  drawSprites();
  
  

  //setup for the survival time
  fill("red");
  textFont("Calibri Light");
  stroke("black");

  textSize(50);
  strokeWeight(10);
  text("SurvivalTime:  " + score, 80, 50);





  // displaying score time
  textFont("Calibri Light");
  fill("turquoise");
  tint("white");
  strokeWeight(10);
  textSize(50);
  text("Score:" + survivalTime, 600, 50)




  // when survival time is 0 the gameState =  end
  if (score === 0) {

    gameState = END;
  }






  
  
  
  // gameState end 
  if (gameState === END) {
    
    
 // background 
    background("black");

    // invsible the score
    score.visible = false

    // texts
    textFont("Courier New")
    fill("cyan");
    textSize(40);
    strokeWeight(5);
    text("PRESS--- CTRL + R ", 200, 50);
    text("To Restart the Game", 200, 150);
    text("And press run to replay",200,250);
    text("Thanks for playing!!",200,350);
    text("HOPE YOU ALL LIKE IT!!!",200,440);


    
    // stop sonic sound loop
    sonicSound.stop();

   // destroying things
    monkey.destroy();
    ground.destroy();

    
    

   // stopping the ground 
    ground.velocityX = 0;
    
    
    // giving velocity and destroying bananas 
    bananaGroup1.setVelocityEach(0);
    bananaGroup1.destroyEach();

    // giving velocity and destroying bananas 
    bananaGroup2.setVelocityEach(0);
    bananaGroup2.destroyEach();

    // giving velocity and destroying obstacles
    obstacleGroup1.setVelocityEach(0);
    obstacleGroup1.destroyEach();

    
    // giving velocity and destroying obstacles
    obstacleGroup2.setVelocityEach(0);
    obstacleGroup2.destroyEach();


  }









}



// spawning rings 
function spawnBananas1() {
  if (frameCount % round(random(600, 400)) === 0) {
    var banana = createSprite(windowWidth, 120);
    banana.y = round(random(250, 250));
    banana.addImage("banana", bananaImage);
    banana.velocityX = -(frameCount / 100);
    banana.scale = 0.1;

    bananaGroup1.add(banana);
  }
}




// spwaning rings on different positions
function spawnBananas2() {
  if (frameCount % round(random(400, 600)) === 0) {
    var banana2 = createSprite(windowWidth, 120);
    banana2.y = round(random(150, 250));
    banana2.addImage("banana", bananaImage);
    banana2.velocityX = -(frameCount / 100);
    banana2.scale = 0.1;

    bananaGroup2.add(banana2);
  }
}





// spwaning eggman 
function spawnObstacles() {
  if (frameCount % round(random(350, 600))) {
    obstacle = createSprite(windowWidth, 300);
    obstacle.addAnimation("EGGMAN", obstacleImage);
    obstacle.velocityX = -(frameCount / 100) - 2;
    obstacle.lifetime = 450;
    obstacle.scale = 0.2;
    obstacle.rotation = 0;
    obstacleGroup1.add(obstacle);
  }
}




// stop the speed on the paticular speed 
function StopSpeed() {
  if (ground.velocityX < -25) {
    ground.velocityX = -25;
    bananaGroup1.velocityX = -10;
    bananaGroup2.velocityX = -10;
  }
}






// making reset function 
function reset() {

  //Initial 
  gameState = PLAY;
  score = 0;

  score = 10;
  gameOver.visible = false;
  restart.visible = false;
}