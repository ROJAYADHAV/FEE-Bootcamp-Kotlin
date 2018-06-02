
var canvas;
var ctx;

var leftDirection = false;
var rightDirection = true;
var upDirection = false;
var downDirection = false;
var inGame = true;
var car_x=0;
var car_y=0;
var paused=false;
var game;
var start=true;

const MOVE = 10;


const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;
const C_HEIGHT = 600;
const C_WIDTH = 600; 
const DELAY = 140;
const SPACE =32;




function init() {
    
    canvas = document.getElementById('playArea');
    ctx = canvas.getContext('2d');
    //ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
    car_x=0;
    car_y=0;
    start = true;
    
    loadImages();
   
    setTimeout("gameCycle()", DELAY);
}   

function loadImages() {
    
    head = new Image();
    head.src = 'images/car.gif'; 
}


function doDrawing() {
    
    ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
    
    if (inGame) {
          if(start == true){
            ctx.drawImage(head, 0, 0,40,30);
            start = false;
          }
          else {
        ctx.drawImage(head, car_x, car_y,40,30);
          }
          
    } else {

        gameOver();
    }        
}

function gameOver() {
    
    ctx.fillStyle = 'blue';

    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
   ctx.font = 'normal bold 18px Helvetica';
    
ctx.fillText('Game over', C_WIDTH/2, C_HEIGHT/2);
}

function move() {

    if (leftDirection) {
    
        car_x -= MOVE;
              
    }

    if (rightDirection) {
    
        car_x += MOVE;
    }

    if (upDirection) {
    
        car_y -= MOVE;
    }

    if (downDirection) {
    
        car_y += MOVE;
    }
}

function checkCollision() {

    

    if (car_y >= C_HEIGHT) {
    
        inGame = false;
    }

    if (car_y < 0) {
    
       inGame = false;
    }

    if (car_x >= C_WIDTH) {
    
      inGame = false;
    }

    if (car_x < 0) {
    
      inGame = false;
    }
}

function gameCycle() {
    
    if (inGame) {

       
        checkCollision();
        move();
        doDrawing();
        game = setTimeout("gameCycle()", DELAY);
    }
}

onkeydown = function(e) {
    
    var key = e.keyCode;
    
    if ((key == LEFT_KEY) && (!rightDirection)) {
        
        leftDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == RIGHT_KEY) && (!leftDirection)) {
        
        rightDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == UP_KEY) && (!downDirection)) {
        
        upDirection = true;
        rightDirection = false;
        leftDirection = false;
    }

    if ((key == DOWN_KEY) && (!upDirection)) {
        
        downDirection = true;
        rightDirection = false;
        leftDirection = false;
    }    
    if(key == SPACE){
        pauseGame();
    }    
};

function pauseGame(){
    if(!paused){
        game = clearTimeout(game);
        paused=true;
    }
    else if(paused) {
        game = setTimeout("gameCycle()", DELAY);
        
          paused=false;
    }
}
function stopGame(){
    inGame=false;
    gameOver();
}