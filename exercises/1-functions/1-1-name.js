"use strict";
window.onresize = drawLine;

drawLine();
drawRect();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
    context.moveTo(50, 150);
    context.lineTo(50, 50);
    context.lineTo(95, 125);
    context.lineTo(140, 50);
    context.lineTo(140, 150);
    context.stroke();

    context.strokeStyle = 'blue';
   context.beginPath();
    context.moveTo(175, 150);
    context.lineTo(215, 50);
    context.lineTo(255, 150);
    context.stroke();
    context.beginPath();
    context.lineTo(188, 120);
    context.lineTo(245, 120);
    context.stroke();
    
    context.strokeStyle = 'green';
   context.beginPath();
    context.moveTo(300, 150);
    context.lineTo(300, 50);
    context.lineTo(380, 50);
    context.lineTo(380, 100);
    context.lineTo(300, 100);
    context.stroke();
    context.beginPath();
    context.lineTo(300, 100);
    context.lineTo(380, 150);
    context.stroke();

    context.strokeStyle = 'red';
   context.beginPath();
    context.moveTo(415, 50);
    context.lineTo(415, 135);
    context.stroke();

    context.strokeStyle = 'red';
    context.beginPath();
     context.moveTo(455, 50);
     context.lineTo(455, 150);
     context.lineTo(415, 150);
     context.stroke();

     context.strokeStyle = 'blue';
   context.beginPath();
    context.moveTo(490, 50);
    context.lineTo(490, 150);
    context.moveTo(490, 120);
    context.lineTo(580, 50);
    context.moveTo(507, 105);
    context.lineTo(580, 150);
    context.stroke();

    context.strokeStyle = 'green';
   context.beginPath();
    context.moveTo(620, 50);
    context.lineTo(620, 150);
    context.moveTo(618, 50);
    context.lineTo(670, 50);
    context.moveTo(618, 100);
    context.lineTo(675, 100);
    context.moveTo(618, 150);
    context.lineTo(675, 150);
    context.stroke();
}


