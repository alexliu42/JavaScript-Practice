function setup(){

    let box = document.getElementById("drawingCanvas");
    let context = box.getContext("2d");
    return context;

}
   
function DrawRectangle(x,y,wid,hei){    

    context = setup();
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x,y+hei);
    context.lineTo(x+wid,y+hei);
    context.lineTo(x+wid,y);
    context.lineTo(x,y);
    context.stroke();
}

function DrawTriangle(x1,y1,x2,y2,x3,y3){

    context = setup();
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.lineTo(x3,y3);
    context.lineTo(x1,y1); 
    context.stroke();
}

function DrawHouse(){

    DrawRectangle(110,110,25,25);
    DrawRectangle(150,110,25,25);
    DrawRectangle(130,150,25,50);
    DrawRectangle(90,90,105,110);
    DrawTriangle(90,90,142.5,50,195,90)

}


