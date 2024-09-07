
let cur=0;
let poocur=0;
let ranpoo;
let ran;
let score=0;
let curspeed=3;


function setup() {
  createCanvas(500, 500);
  ran=random(45,width-45);
  ranpoo=random(45,width-45);

  highScore = getItem('HS');
  if (highScore === null) {
    highScore = 0;
  }
  
}

function draw() {
  // put drawing code here
  background(0);
  startGame();
}

function startGame(){
  displayScore();
  fill(77, 61, 18)
  ellipse(ranpoo,poocur,32,50);
  fill(255)
  ellipse(ran,cur,32,40);
  rect(mouseX,height-45,60,32);
  cur+=curspeed
  poocur+=6

  if (((cur>=height-45))&(((mouseX+60)>=ran)&(mouseX<=ran))) {
    score +=1;
    cur=0;
    curspeed+=0.25;
    ran=random(45,width-45);
  }
  if (cur>=height){
    cur=0;
    score=score-1;
    ran=random(45,width-45);
  }
  if(poocur>=height){
    poocur=0;
    ranpoo=random(45,width-45);
  }
  if (((poocur>=height-45))&(((mouseX+60)>=ranpoo)&(mouseX<=ranpoo))) {
    gameOver();
   
    score=0;
    poocur=0;
    ranpoo=random(45,width-45);
    
  }

function gameOver(){
 
  noLoop();
  highScore = max(highScore, score);
  storeItem('HS', highScore);
  curspeed=3
  background(0)
  textSize(48);
  textAlign(CENTER);
  textFont('Arial');
  fill(255, 0, 0);
  text(`Game Over`, width/2, height/3);
  textSize(20);
  textAlign(CENTER);
  textFont('Courier New');
  fill(255, 0, 0);
  text(`HighScore: ${highScore}\nScore : ${score}\n\n Tap to Play Again`, width/2, height/2);
}

}
function displayScore() {
  textSize(20);
  textAlign(CENTER);

  //Add font
  textFont('Courier New');
  fill(255, 0, 0);
  text(`Score : ${score}`, width/8, height/8);
}

function mousePressed(){
  if(isLooping()===false){
    startGame();
    loop();
  }
}