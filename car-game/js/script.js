
window.onload = function() {
    var canvas = document.getElementById("playArea");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src="images/car.jpg";

    img.onload = function(){
    ctx.drawImage(img, 0, 0,50,45);
    };
};
var car = (function () {
    
    

}());