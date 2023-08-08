    "use strict";
drawPizza()

function drawPizza(){
    //get canvas context
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2D");

    // draw pizza with crust
    context.fillStyle = "orange";
    context.fillStroke = "brown";
    context.lineWidth = 30;
    context.beginPath();
    context.arc(250, 250, Math.PI, Math.PI * 3 / 2);
    context.stroke();
    context.lineTo(250, 250);
    context.fill();
}
