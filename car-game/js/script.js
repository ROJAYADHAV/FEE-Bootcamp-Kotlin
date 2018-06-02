
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


var img_obj = {
    'source': null,
    'current': 0,
    'total_frames': 16,
    'width': 40,
    'height': 30
};


var count=0;

const MOVE = 10;


const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;
const C_HEIGHT = 600;
const C_WIDTH = 600; 

const SPACE =32;

var DELAY=300;


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
    
    img = new Image();
   // img.onload = function () { // Triggered when image has finished loading.
       // img_obj.source = img;  // we set the image source for our object.
    //}
    //img.src = 'img/filename.png'; // contains an image of size 256x16
    img.src = 'images/car.gif'; 
    // with 16 frames of size 16x16
}

/*
    function draw_anim(context, x, y, iobj) { // context is the canvas 2d context.
        if (iobj.source != null)
            context.drawImage(iobj.source, iobj.current * iobj.width, 0,
                              iobj.width, iobj.height,
                              x, y, iobj.width, iobj.height);
        iobj.current = (iobj.current + 1) % iobj.total_frames;
            }

*/


function doDrawing() {
    
    ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
    
    if (inGame) {
          if(start == true){
           ctx.drawImage(img, 0, 0,40,30);
          // draw_anim(ctx, 0, 0, img_obj);
            start = false;
          }
          else {
        ctx.drawImage(img, car_x, car_y,40,30);
        //draw_anim(ctx, car_x, car_y, img_obj);
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
       // ctx.save();
       // ctx.rotate(Math.PI/2);
       // ctx.drawImage(img, car_x, car_y,40,30);
        //ctx.restore();
        
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

       ++count;
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